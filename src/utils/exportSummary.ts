import {
  CATALOG_ITEMS,
  CONTACT_INFO,
  WORKSHOPS,
  type CatalogItem,
  type WorkshopSession,
} from '../data/flouData';

export interface SummaryExportPayload {
  favoriteIds: string[];
  registeredWorkshopIds: string[];
  contactDraft?: {
    fullName?: string;
    phone?: string;
    email?: string;
    zone?: string;
    selectedService?: string;
    clientType?: string;
    notes?: string;
  };
}

function triggerDownload(filename: string, content: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function buildSummaryText(payload: SummaryExportPayload): string {
  const savedItems: CatalogItem[] = CATALOG_ITEMS.filter((item) =>
    payload.favoriteIds.includes(item.id)
  );
  const itemsToExport = savedItems.length > 0 ? savedItems : CATALOG_ITEMS;
  const registeredWorkshops: WorkshopSession[] = WORKSHOPS.filter((session) =>
    payload.registeredWorkshopIds.includes(session.id)
  );

  const dateStr = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date());

  const lines: string[] = [
    '====================================================================',
    'FLOU – CONEXIÓN QUE INSPIRA | INTERNET POR FIBRA ÓPTICA',
    'Consorcio Troncal Virtual del Pacífico – Ciudad Mutis (Bahía Solano)',
    'Alianza OLE Pacific S.A.S. & Lean Integral TIC S.A.S. (LIT)',
    '====================================================================',
    `Fecha de generación: ${dateStr}`,
    `Alcance del resumen: ${
      savedItems.length > 0
        ? `${savedItems.length} elemento(s) guardado(s) por el usuario`
        : 'Portafolio completo de planes e infraestructura FLOU'
    }`,
    '',
    '1. PLANES Y FICHAS SELECCIONADAS',
    '--------------------------------------------------------------------',
  ];

  itemsToExport.forEach((item, index) => {
    lines.push(`${String(index + 1).padStart(2, '0')}. ${item.title} [${item.code}]`);
    lines.push(`    Categoría: ${item.categoryLabel} | ${item.segment}`);
    lines.push(`    Capacidad: ${item.speedLabel}`);
    lines.push(`    Tarifa / Estado: ${item.monthlyPrice}`);
    lines.push(`    Instalación / Referencia: ${item.installationPrice}`);
    if (item.migrationPrice) {
      lines.push(`    Migración OLE Pacific: ${item.migrationPrice}`);
    }
    lines.push(`    Resumen: ${item.summary}`);
    lines.push('    Especificaciones:');
    item.specs.forEach((spec) => {
      lines.push(`      - ${spec.label}: ${spec.value}`);
    });
    lines.push('');
  });

  if (registeredWorkshops.length > 0) {
    lines.push('2. TALLERES Y JORNADAS INSCRITAS');
    lines.push('--------------------------------------------------------------------');
    registeredWorkshops.forEach((ws) => {
      lines.push(`- [${ws.code}] ${ws.title}`);
      lines.push(`  Eje: ${ws.axis} | Modalidad: ${ws.modality} | Duración: ${ws.duration}`);
      lines.push(`  Lugar: ${ws.location}`);
    });
    lines.push('');
  }

  if (payload.contactDraft && (payload.contactDraft.fullName || payload.contactDraft.selectedService)) {
    lines.push('3. DATOS DE SOLICITUD DE CONTACTO');
    lines.push('--------------------------------------------------------------------');
    if (payload.contactDraft.fullName) lines.push(`Nombre: ${payload.contactDraft.fullName}`);
    if (payload.contactDraft.phone) lines.push(`Teléfono: ${payload.contactDraft.phone}`);
    if (payload.contactDraft.email) lines.push(`Correo: ${payload.contactDraft.email}`);
    if (payload.contactDraft.zone) lines.push(`Municipio / Sector: ${payload.contactDraft.zone}`);
    if (payload.contactDraft.clientType) {
      lines.push(`Tipo de solicitud: ${payload.contactDraft.clientType}`);
    }
    if (payload.contactDraft.selectedService) {
      lines.push(`Servicio de interés: ${payload.contactDraft.selectedService}`);
    }
    if (payload.contactDraft.notes) lines.push(`Observaciones: ${payload.contactDraft.notes}`);
    lines.push('');
  }

  lines.push('CANALES OFICIALES DE ATENCIÓN');
  lines.push('--------------------------------------------------------------------');
  lines.push(`Teléfono / WhatsApp: ${CONTACT_INFO.phoneDisplay}`);
  lines.push(`Correo electrónico: ${CONTACT_INFO.email}`);
  lines.push(`Sitios web: ${CONTACT_INFO.webFlou} | ${CONTACT_INFO.webOle}`);
  lines.push(`Ubicación: ${CONTACT_INFO.location}`);
  lines.push('Registro habilitante convergente MinTIC: RTIC 96001899 (OLE Pacific S.A.S.)');

  return lines.join('\n');
}

export function exportSummaryTxt(payload: SummaryExportPayload): void {
  const text = buildSummaryText(payload);
  triggerDownload('resumen-flou-fibra-optica.txt', text, 'text/plain;charset=utf-8');
}

export function exportSummaryJson(payload: SummaryExportPayload): void {
  const savedItems = CATALOG_ITEMS.filter((item) => payload.favoriteIds.includes(item.id));
  const registeredWorkshops = WORKSHOPS.filter((session) =>
    payload.registeredWorkshopIds.includes(session.id)
  );

  const output = {
    proyecto: 'FLOU – Conexión que inspira | Internet por Fibra Óptica',
    consorcio: 'Consorcio Troncal Virtual del Pacífico – Ciudad Mutis (OLE Pacific S.A.S. & LIT)',
    generadoEn: new Date().toISOString(),
    elementosSeleccionados: savedItems.length > 0 ? savedItems : CATALOG_ITEMS,
    talleresInscritos: registeredWorkshops,
    solicitudContacto: payload.contactDraft ?? null,
    contactoOficial: CONTACT_INFO,
  };

  triggerDownload(
    'resumen-flou-fibra-optica.json',
    JSON.stringify(output, null, 2),
    'application/json;charset=utf-8'
  );
}
