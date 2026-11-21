export type CatalogCategory = 'todos' | 'hogar' | 'comercial' | 'dedicado' | 'infraestructura';

export type SchematicType =
  | 'plan-6'
  | 'plan-10'
  | 'plan-15'
  | 'plan-20'
  | 'plan-50'
  | 'dedicado'
  | 'troncal'
  | 'ont-wifi'
  | 'pacifico';

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface CatalogItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<CatalogCategory, 'todos'>;
  categoryLabel: string;
  segment: string;
  speedLabel: string;
  monthlyPrice: string;
  installationPrice: string;
  migrationPrice?: string;
  summary: string;
  description: string;
  idealFor: string[];
  specs: TechnicalSpec[];
  schematic: SchematicType;
  altText: string;
  imageSrc: string;
  imageAlt: string;
}

export const MEDIA_ASSETS = {
  heroBay: '/src/assets/images/hero_bahia_solano_fibra_1795277322298.jpg',
  homeFamily: '/src/assets/images/plan_hogar_familia_pacifico_1795277321718.jpg',
  commercialTourism: '/src/assets/images/plan_comercial_turismo_choco_1795277321987.jpg',
  fiberHardwareLab: '/src/assets/images/infraestructura_fibra_optica_lab_1795277320928.jpg',
  technicalWorkshops: '/src/assets/images/talleres_capacitacion_tecnica_1795277320684.jpg',
};

export interface WorkshopSession {
  id: string;
  code: string;
  axis: string;
  title: string;
  audience: string;
  modality: string;
  duration: string;
  location: string;
  objective: string;
  topics: string[];
}

export interface ConsortiumEntity {
  name: string;
  shortName: string;
  registry: string;
  registrationDate: string;
  nit: string;
  matricula: string;
  license?: string;
  role: string;
}

export interface ProjectPhase {
  step: string;
  title: string;
  period: string;
  detail: string;
}

export const OFFICIAL_DOCUMENTS = {
  corporatePdf:
    '/assets/aistudio/Informacio_n_Corporativa_y_del_Proyecto_TVP_Bahi_a_Solano.docx_9af5c742.pdf',
  brandManualPdf:
    '/assets/aistudio/MANUAL_DE_MARCA_FLOU__final_25_mar_compressed__1__bd517f3b.pdf',
};

export const CONTACT_INFO = {
  phoneDisplay: '(+57) 312 510 1969',
  phoneHref: 'tel:+573125101969',
  email: 'info@olepacific.net',
  webFlou: 'www.floucol.com',
  webOle: 'www.olepacific.net',
  location: 'Cabecera Municipal de Ciudad Mutis, Bahía Solano, Chocó, Colombia',
};

export const HERO_METRICS = [
  {
    value: '14.2 km',
    label: 'Red troncal de fibra óptica',
    context: 'Ciudad Mutis a Aeropuerto José Celestino Mutis',
  },
  {
    value: '1.000 → 3.000',
    label: 'Capacidad de usuarios',
    context: 'Despliegue inicial escalable sin recableado mayor',
  },
  {
    value: '6 a 50 Mbps',
    label: 'Planes ilimitados y dedicado',
    context: 'Internet dedicado desde 10 Mbps bajo acuerdo técnico',
  },
  {
    value: '10+ años',
    label: 'Vida útil de red externa',
    context: 'Pasiva, sin consumo eléctrico e inmune a la lluvia',
  },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'plan-hogar-6',
    code: 'FL-HOG-06',
    title: 'Plan Hogar 6 Megas',
    category: 'hogar',
    categoryLabel: 'Hogar',
    segment: 'Residencial · Ilimitado',
    speedLabel: '6 Mbps',
    monthlyPrice: '$90.000 COP / mes',
    installationPrice: '$240.000 COP',
    migrationPrice: '$170.000 COP (clientes actuales OLE Pacific)',
    summary:
      'Conectividad residencial estable en fibra óptica para estudio en casa, videollamadas y navegación diaria sin interrupciones por lluvia.',
    description:
      'Plan ilimitado de entrada sobre red externa de fibra óptica pasiva en Bahía Solano. Incluye instalación y entrega en comodato de la Terminal de Red Óptica (ONT) con funcionalidad WiFi integrada.',
    idealFor: [
      'Hogares y familias en Ciudad Mutis',
      'Clases virtuales y acceso a plataformas educativas',
      'Comunicación cotidiana y trámites en línea',
    ],
    specs: [
      { label: 'Velocidad contratada', value: '6 Mbps ilimitados' },
      { label: 'Tarifa mensual', value: '$90.000 COP' },
      { label: 'Instalación nueva', value: '$240.000 COP' },
      { label: 'Migración clientes OLE', value: '$170.000 COP (retornando equipos previos)' },
      { label: 'Equipo incluido', value: 'Terminal de Red Óptica (ONT) con WiFi en comodato' },
      { label: 'Medio de transmisión', value: 'Fibra óptica inmune a condiciones climáticas' },
    ],
    schematic: 'plan-6',
    altText:
      'Esquema técnico de conexión Plan Hogar 6 Megas por fibra óptica hacia terminal ONT WiFi residencial',
    imageSrc: MEDIA_ASSETS.homeFamily,
    imageAlt:
      'Familia del Pacífico chocoano conectada en su hogar estudiando mediante Internet de fibra óptica FLOU Plan Hogar 6 Megas',
  },
  {
    id: 'plan-hogar-10',
    code: 'FL-HOG-10',
    title: 'Plan Hogar 10 Megas',
    category: 'hogar',
    categoryLabel: 'Hogar',
    segment: 'Residencial · Ilimitado',
    speedLabel: '10 Mbps',
    monthlyPrice: '$150.000 COP / mes',
    installationPrice: '$240.000 COP',
    migrationPrice: '$170.000 COP (clientes actuales OLE Pacific)',
    summary:
      'Mayor holgura para hogares con múltiples dispositivos conectados simultáneamente en teletrabajo, educación y entretenimiento.',
    description:
      'Diseñado para familias conectadas en Ciudad Mutis que requieren estabilidad simultánea en varios equipos. Opera sobre la troncal óptica de 14.2 km con terminal ONT WiFi entregada en comodato.',
    idealFor: [
      'Familias con varios estudiantes y teletrabajadores',
      'Videoconferencias estables y contenido en alta definición',
      'Migración desde enlaces de radio a fibra óptica',
    ],
    specs: [
      { label: 'Velocidad contratada', value: '10 Mbps ilimitados' },
      { label: 'Tarifa mensual', value: '$150.000 COP' },
      { label: 'Instalación nueva', value: '$240.000 COP' },
      { label: 'Migración clientes OLE', value: '$170.000 COP (retornando equipos previos)' },
      { label: 'Equipo incluido', value: 'Terminal de Red Óptica (ONT) con WiFi en comodato' },
      { label: 'Cobertura inicial', value: 'Cabecera Ciudad Mutis – Corredor Aeropuerto' },
    ],
    schematic: 'plan-10',
    altText:
      'Esquema técnico de distribución Plan Hogar 10 Megas con múltiples dispositivos sobre fibra óptica',
    imageSrc: MEDIA_ASSETS.homeFamily,
    imageAlt:
      'Hogar en Ciudad Mutis con múltiples dispositivos conectados simultáneamente al Plan Hogar 10 Megas de FLOU',
  },
  {
    id: 'plan-hogar-15',
    code: 'FL-HOG-15',
    title: 'Plan Hogar 15 Megas',
    category: 'hogar',
    categoryLabel: 'Hogar',
    segment: 'Residencial · Alta demanda',
    speedLabel: '15 Mbps',
    monthlyPrice: '$225.000 COP / mes',
    installationPrice: '$240.000 COP',
    migrationPrice: '$170.000 COP (clientes actuales OLE Pacific)',
    summary:
      'Máxima capacidad residencial del portafolio hogar para creadores locales, trabajo remoto intensivo y familias de alto consumo digital.',
    description:
      'Ofrece un ancho de banda holgado y continuo sobre fibra óptica sin consumo eléctrico en red externa. Incluye ONT con WiFi en comodato y tarifa preferencial de migración para usuarios actuales de OLE Pacific.',
    idealFor: [
      'Profesionales independientes y emprendedores desde casa',
      'Transferencia frecuente de archivos y respaldo en la nube',
      'Hogares con alta concurrencia de dispositivos',
    ],
    specs: [
      { label: 'Velocidad contratada', value: '15 Mbps ilimitados' },
      { label: 'Tarifa mensual', value: '$225.000 COP' },
      { label: 'Instalación nueva', value: '$240.000 COP' },
      { label: 'Migración clientes OLE', value: '$170.000 COP (retornando equipos previos)' },
      { label: 'Equipo incluido', value: 'Terminal de Red Óptica (ONT) con WiFi en comodato' },
      { label: 'Estabilidad climática', value: 'Red externa óptica resistente a lluvia intensa' },
    ],
    schematic: 'plan-15',
    altText:
      'Esquema técnico Plan Hogar 15 Megas con perfil de alta capacidad residencial en Bahía Solano',
    imageSrc: MEDIA_ASSETS.homeFamily,
    imageAlt:
      'Familia y teletrabajo en vivienda costera de Bahía Solano conectados al Plan Hogar 15 Megas por fibra óptica',
  },
  {
    id: 'plan-comercial-20',
    code: 'FL-COM-20',
    title: 'Plan Comercial 20 Megas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    segment: 'Comercio y Turismo · Ilimitado',
    speedLabel: '20 Mbps',
    monthlyPrice: '$300.000 COP / mes',
    installationPrice: '$615.000 COP',
    summary:
      'Conectividad de alto rendimiento para hoteles, comercios, restaurantes, operadores turísticos y puntos de atención al público.',
    description:
      'Formulado para impulsar proyectos productivos, turismo, pesca y comercio local en Bahía Solano. Garantiza continuidad operativa para reservas en línea, datáfonos, facturación electrónica y WiFi de clientes.',
    idealFor: [
      'Comercios locales y operadores de turismo en Bahía Solano',
      'Posadas, hoteles y restaurantes con atención a visitantes',
      'Facturación electrónica y canales digitales de venta',
    ],
    specs: [
      { label: 'Velocidad contratada', value: '20 Mbps ilimitados' },
      { label: 'Tarifa mensual', value: '$300.000 COP' },
      { label: 'Instalación comercial', value: '$615.000 COP' },
      { label: 'Equipo incluido', value: 'Terminal de Red Óptica (ONT) con WiFi en comodato' },
      { label: 'Respaldo operativo', value: 'Operación local del Consorcio TVP (OLE + LIT)' },
      { label: 'Disponibilidad', value: 'Sin degradación por lluvia o humedad costera' },
    ],
    schematic: 'plan-20',
    altText:
      'Esquema técnico Plan Comercial 20 Megas orientado a comercios y operación turística en Ciudad Mutis',
    imageSrc: MEDIA_ASSETS.commercialTourism,
    imageAlt:
      'Emprendedora turística gestionando reservas digitales en hospedaje costero de Bahía Solano con Plan Comercial 20 Megas',
  },
  {
    id: 'plan-comercial-50',
    code: 'FL-COM-50',
    title: 'Plan Comercial 50 Megas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    segment: 'Comercio Avanzado · Ilimitado',
    speedLabel: '50 Mbps',
    monthlyPrice: '$650.000 COP / mes',
    installationPrice: '$615.000 COP',
    summary:
      'El plan de mayor velocidad comercial en Bahía Solano para sedes empresariales, complejos turísticos y organizaciones con alto tráfico.',
    description:
      'Entrega 50 Mbps ilimitados por fibra óptica directa para operaciones que demandan carga y descarga constante, múltiples puntos de acceso y operación ininterrumpida durante todo el año.',
    idealFor: [
      'Hoteles de gran afluencia y empresas regionales',
      'Oficinas administrativas y cooperativas productivas',
      'Centros de formación y espacios colaborativos',
    ],
    specs: [
      { label: 'Velocidad contratada', value: '50 Mbps ilimitados' },
      { label: 'Tarifa mensual', value: '$650.000 COP' },
      { label: 'Instalación comercial', value: '$615.000 COP' },
      { label: 'Equipo incluido', value: 'Terminal de Red Óptica (ONT) con WiFi en comodato' },
      { label: 'Capacidad de crecimiento', value: 'Escalable a enlace dedicado según requerimiento' },
      { label: 'Soporte técnico', value: 'Equipo especializado en telecomunicaciones' },
    ],
    schematic: 'plan-50',
    altText:
      'Esquema técnico Plan Comercial 50 Megas de máxima velocidad comercial sobre red troncal óptica',
    imageSrc: MEDIA_ASSETS.commercialTourism,
    imageAlt:
      'Operación turística y comercial de alta demanda en el Pacífico chocoano conectada al Plan Comercial 50 Megas FLOU',
  },
  {
    id: 'internet-dedicado',
    code: 'FL-DED-10+',
    title: 'Internet Dedicado Empresarial',
    category: 'dedicado',
    categoryLabel: 'Dedicado',
    segment: 'Empresarial e Institucional · A medida',
    speedLabel: 'Desde 10 Mbps',
    monthlyPrice: 'Acuerdo comercial a medida',
    installationPrice: 'Según ingeniería de enlace',
    summary:
      'Capacidad dedicada desde 10 Megas con condiciones técnicas, comerciales y niveles de servicio definidos conjuntamente con cada entidad.',
    description:
      'Orientado a entidades públicas, centros de salud con telemedicina, instituciones educativas, consejos comunitarios y empresas que requieren canal exclusivo y acuerdo técnico personalizado.',
    idealFor: [
      'Entidades públicas y sedes gubernamentales',
      'Programas de telemedicina y atención con especialistas',
      'Sistemas de alertas tempranas y comunicación institucional',
    ],
    specs: [
      { label: 'Capacidad base', value: 'Desde 10 Mbps dedicados en adelante' },
      { label: 'Condiciones de servicio', value: 'Acordadas técnicamente con cada interesado' },
      { label: 'Ingeniería e integración', value: 'A cargo de Lean Integral TIC S.A.S. y OLE Pacific' },
      { label: 'Aplicaciones críticas', value: 'Telemedicina, seguridad, educación y gestión pública' },
      { label: 'Habilitación legal', value: 'Registro convergente MinTIC RTIC 96001899' },
      { label: 'Escalabilidad', value: 'Crecimiento sobre troncal óptica de 14.2 km' },
    ],
    schematic: 'dedicado',
    altText:
      'Esquema técnico de canal de Internet Dedicado desde 10 Mbps para instituciones y empresas',
    imageSrc: MEDIA_ASSETS.fiberHardwareLab,
    imageAlt:
      'Haces de fibra óptica de alta precisión y equipamiento óptico para enlaces de Internet Dedicado empresarial e institucional',
  },
  {
    id: 'infra-troncal-mutis',
    code: 'TVP-INF-14K',
    title: 'Troncal Óptica Ciudad Mutis – Aeropuerto',
    category: 'infraestructura',
    categoryLabel: 'Infraestructura',
    segment: 'Red Troncal · 14.2 km',
    speedLabel: '14.2 km',
    monthlyPrice: 'Infraestructura activa',
    installationPrice: 'Capacidad 1.000 a 3.000 clientes',
    summary:
      'Tendido principal de fibra óptica de 14.2 km desde la cabecera municipal de Ciudad Mutis hasta el Aeropuerto José Celestino Mutis.',
    description:
      'Primera implementación del Gran Proyecto Troncal Virtual del Pacífico. Red externa pasiva, amigable con el medio ambiente, sin consumo de energía eléctrica en tramo externo y diseñada para una vida útil mínima de 10 años.',
    idealFor: [
      'Cobertura urbana integral de Ciudad Mutis',
      'Corredor estratégico hacia el Aeropuerto José Celestino Mutis',
      'Soporte a usuarios residenciales, comerciales e institucionales',
    ],
    specs: [
      { label: 'Longitud troncal', value: '14.2 km de fibra óptica' },
      { label: 'Trazado principal', value: 'Cabecera Ciudad Mutis – Aeropuerto José Celestino Mutis' },
      { label: 'Capacidad inicial', value: '1.000 clientes conectados' },
      { label: 'Capacidad de expansión', value: 'Hasta 3.000 clientes de forma gradual' },
      { label: 'Consumo eléctrico externo', value: '0 W (red externa óptica pasiva)' },
      { label: 'Vida útil mínima', value: '10 años en condiciones climáticas del Pacífico' },
    ],
    schematic: 'troncal',
    altText:
      'Diagrama topográfico de la red troncal de 14.2 km desde Ciudad Mutis hasta el Aeropuerto José Celestino Mutis',
    imageSrc: MEDIA_ASSETS.heroBay,
    imageAlt:
      'Bahía y cabecera municipal de Ciudad Mutis donde se despliega la red troncal de 14.2 kilómetros de fibra óptica',
  },
  {
    id: 'infra-ont-comodato',
    code: 'TVP-EQU-ONT',
    title: 'Terminal de Red Óptica (ONT) WiFi',
    category: 'infraestructura',
    categoryLabel: 'Infraestructura',
    segment: 'Equipamiento de acceso · Comodato',
    speedLabel: 'WiFi integrado',
    monthlyPrice: 'Incluida en comodato',
    installationPrice: 'Cubierta por tarifa de instalación',
    migrationPrice: 'Migración OLE: retorno de equipo inalámbrico previo',
    summary:
      'Equipo terminal óptico con enrutador WiFi suministrado en comodato en todos los planes residenciales y comerciales de FLOU.',
    description:
      'Convierte la señal luminosa de la fibra óptica en conectividad cableada e inalámbrica dentro del hogar o comercio. Su entrega en comodato está incluida dentro del valor de instalación y configurada por técnicos del consorcio.',
    idealFor: [
      'Instalación limpia en hogares y locales comerciales',
      'Distribución inalámbrica inmediata sin compra de router adicional',
      'Sustitución ordenada de radios en espectro no licenciado',
    ],
    specs: [
      { label: 'Tipo de equipo', value: 'Terminal de Red Óptica (ONT) con WiFi' },
      { label: 'Modalidad de entrega', value: 'En comodato, incluida en el valor de instalación' },
      { label: 'Planes compatibles', value: 'Todos los planes Hogar (6–15M) y Comercial (20–50M)' },
      { label: 'Migración OLE Pacific', value: 'Requiere devolución de equipos inalámbricos previos' },
      { label: 'Mantenimiento', value: 'Soporte y gestión técnica del Consorcio TVP' },
      { label: 'Referencia de red', value: 'Acceso óptico de última milla' },
    ],
    schematic: 'ont-wifi',
    altText:
      'Diagrama técnico de la Terminal de Red Óptica ONT con WiFi entregada en comodato',
    imageSrc: MEDIA_ASSETS.fiberHardwareLab,
    imageAlt:
      'Terminal de Red Óptica ONT con WiFi de doble antena y cable de fibra óptica de alta velocidad entregada en comodato',
  },
  {
    id: 'infra-gran-proyecto-pacifico',
    code: 'TVP-REG-05M',
    title: 'Gran Proyecto Troncal Virtual del Pacífico',
    category: 'infraestructura',
    categoryLabel: 'Infraestructura',
    segment: 'Visión Regional · 5 Municipios',
    speedLabel: '5 municipios',
    monthlyPrice: 'Inversión consorciada y privada',
    installationPrice: 'Fase 1: Bahía Solano',
    summary:
      'Iniciativa de despliegue de redes de acceso en fibra óptica para integrar de forma virtual a los cinco municipios del Pacífico chocoano.',
    description:
      'Financiado con recursos de OLE Pacific S.A.S., Lean Integral TIC S.A.S. e inversionistas privados. Bahía Solano marca la primera implementación hacia una red regional que proyecta conectividad para Juradó, Bahía Solano, Nuquí, Bajo Baudó y Litoral del San Juan.',
    idealFor: [
      'Integración virtual sostenible del Pacífico chocoano',
      'Desarrollo competitivo de comunidades costeras',
      'Generación de empleo técnico de calidad en la región',
    ],
    specs: [
      { label: 'Municipios contemplados', value: 'Juradó, Bahía Solano, Nuquí, Bajo Baudó y Litoral del San Juan' },
      { label: 'Primera implementación', value: 'Bahía Solano (Ciudad Mutis)' },
      { label: 'Estructura financiera', value: 'Empresas consorciadas e inversionistas privados' },
      { label: 'Alianza ejecutora', value: 'OLE Pacific S.A.S. + Lean Integral TIC S.A.S. (LIT)' },
      { label: 'Ejes de impacto', value: 'Educación, Productividad, Salud, Riesgos y Seguridad' },
      { label: 'Base instalada inicial', value: '202 clientes activos migrables en Bahía Solano' },
    ],
    schematic: 'pacifico',
    altText:
      'Mapa esquemático de los cinco municipios del Pacífico chocoano del Gran Proyecto Troncal Virtual del Pacífico',
    imageSrc: MEDIA_ASSETS.technicalWorkshops,
    imageAlt:
      'Equipo técnico regional preparando despliegues de fibra óptica para la integración de los cinco municipios del Pacífico chocoano',
  },
];

export const WORKSHOPS: WorkshopSession[] = [
  {
    id: 'taller-migracion-fibra',
    code: 'JOR-01',
    axis: 'Operación y Migración',
    title: 'Jornada Técnica de Migración: Radio a Fibra Óptica',
    audience: 'Clientes actuales de OLE Pacific y nuevos hogares en Ciudad Mutis',
    modality: 'Presencial en Ciudad Mutis',
    duration: '90 min',
    location: 'Punto de atención Consorcio TVP · Ciudad Mutis',
    objective:
      'Explicar el paso de enlaces inalámbricos a fibra óptica, el uso adecuado de la Terminal ONT WiFi y las condiciones de migración ($170.000 COP con retorno de equipos previos).',
    topics: [
      'Diferencia entre espectro no licenciado y fibra óptica pasiva',
      'Ubicación óptima de la Terminal de Red Óptica (ONT) WiFi',
      'Proceso de agendamiento técnico y devolución de equipos anteriores',
    ],
  },
  {
    id: 'taller-proyectos-productivos',
    code: 'JOR-02',
    axis: 'Proyectos Productivos',
    title: 'Conectividad Digital para Turismo, Pesca y Artesanía Local',
    audience: 'Comerciantes, operadores turísticos, pescadores y artesanos',
    modality: 'Presencial + práctica guiada',
    duration: '2 horas',
    location: 'Sala comunitaria · Cabecera Municipal Bahía Solano',
    objective:
      'Aprovechar los planes comerciales de 20 y 50 Megas para posicionar servicios turísticos, productos pesqueros y artesanales del Pacífico en mercados globales.',
    topics: [
      'Canales digitales de reservas y atención a visitantes',
      'Continuidad de pagos y facturación electrónica con fibra óptica',
      'Buenas prácticas de red WiFi para huéspedes y clientes',
    ],
  },
  {
    id: 'taller-educacion-salud',
    code: 'JOR-03',
    axis: 'Educación, Salud y Prevención',
    title: 'Apropiación de Alta Velocidad para Instituciones y Consejos Comunitarios',
    audience: 'Docentes, personal de salud, entidades públicas y Consejos Comunitarios',
    modality: 'Mesa técnica institucional',
    duration: '2 horas',
    location: 'Ciudad Mutis · Corredor institucional',
    objective:
      'Estructurar soluciones de conectividad y enlaces dedicados desde 10 Megas para educación virtual, telemedicina, alertas tempranas ante inundaciones o tsunamis y comunicación comunitaria.',
    topics: [
      'Requerimientos de red para telemedicina y aulas virtuales',
      'Protocolos de comunicación colaborativa entre Consejos Comunitarios y autoridades',
      'Definición de condiciones técnicas para Internet Dedicado',
    ],
  },
  {
    id: 'taller-talento-redes',
    code: 'JOR-04',
    axis: 'Capacitación en Redes (LIT)',
    title: 'Fundamentos de Redes Externas de Fibra Óptica y Mantenimiento',
    audience: 'Jóvenes técnicos y talento local del Pacífico chocoano',
    modality: 'Taller práctico de laboratorio',
    duration: '3 horas',
    location: 'Centro técnico operativo · Bahía Solano',
    objective:
      'Formación técnica liderada por el equipo de Lean Integral TIC S.A.S. enfocada en el pilar de generación de empleo de calidad y mantenimiento sostenible de redes ópticas.',
    topics: [
      'Arquitectura de red externa pasiva sin consumo eléctrico',
      'Cuidado de tendidos ópticos frente a clima tropical y lluvia',
      'Estándares de servicio al cliente e instalación domiciliaria',
    ],
  },
];

export const CONSORTIUM_ENTITIES: ConsortiumEntity[] = [
  {
    name: 'OLE Pacific S.A.S.',
    shortName: 'OLE Pacific',
    registry: 'Cámara de Comercio del Chocó',
    registrationDate: '30 de abril de 2013',
    nit: '900614305-1',
    matricula: '29-045883-12',
    license: 'Registro habilitante convergente MinTIC RTIC 96001899 (19 de diciembre de 2013)',
    role: 'Operador local de telecomunicaciones en Bahía Solano con 202 clientes activos en segmentos residencial, comercial, empresarial e institucional.',
  },
  {
    name: 'Lean Integral TIC S.A.S.',
    shortName: 'LIT',
    registry: 'Cámara de Comercio de Medellín',
    registrationDate: '23 de octubre de 2020',
    nit: '901424504-9',
    matricula: '21-682670-12',
    role: 'Especialista en diseño y optimización, consultoría, suministro de equipos y materiales, implementación, integración, operación, mantenimiento y capacitación en redes de telecomunicaciones.',
  },
];

export const OLE_CLIENT_DISTRIBUTION = [
  { segment: 'Residencial', count: 62, share: '30.7%' },
  { segment: 'Comercial', count: 90, share: '44.6%' },
  { segment: 'Empresarial', count: 25, share: '12.4%' },
  { segment: 'Institucional', count: 25, share: '12.4%' },
];

export const FIVE_PILLARS = [
  {
    number: '01',
    title: 'Mejores velocidades y capacidad de crecimiento',
    description:
      'Red troncal diseñada para iniciar con 1.000 clientes y escalar progresivamente hasta 3.000 usuarios con planes de 6 a 50 Megas y canales dedicados.',
  },
  {
    number: '02',
    title: 'Calidad y estabilidad del servicio',
    description:
      'Tecnología óptica madura, pasiva y resistente a las lluvias e intensa humedad del Pacífico chocoano, con vida útil mínima de 10 años.',
  },
  {
    number: '03',
    title: 'Mayor penetración en la conectividad',
    description:
      'Cobertura estructurada desde la cabecera municipal de Ciudad Mutis hasta el Aeropuerto José Celestino Mutis como base del proyecto regional.',
  },
  {
    number: '04',
    title: 'Excelencia en el servicio al cliente',
    description:
      'Atención cercana y directa en el territorio con acompañamiento desde la migración o instalación hasta la operación diaria.',
  },
  {
    number: '05',
    title: 'Generación de empleo de calidad',
    description:
      'Capacitación y vinculación de talento local en instalación, operación y mantenimiento de redes de telecomunicaciones.',
  },
];

export const PROJECT_PHASES: ProjectPhase[] = [
  {
    step: 'Fase 01',
    title: 'Diseño detallado de la red',
    period: 'Mayo 2021',
    detail: 'Ingeniería de detalle del trazado troncal de 14.2 km en Ciudad Mutis y sector aeropuerto.',
  },
  {
    step: 'Fase 02',
    title: 'Compra y adquisición',
    period: 'Junio – Agosto 2021',
    detail: 'Adquisición de fibra óptica, materiales pasivos, terminales ONT y contratación de servicios.',
  },
  {
    step: 'Fase 03',
    title: 'Construcción de red y pruebas',
    period: 'Septiembre – 1ª quincena octubre 2021',
    detail: 'Despliegue físico de la primera fase de red externa y pruebas de certificación óptica.',
  },
  {
    step: 'Fase 04',
    title: 'Migración y operación comercial',
    period: '2ª quincena octubre 2021 en adelante',
    detail: 'Migración de clientes inalámbricos de OLE Pacific y activación comercial masiva de FLOU.',
  },
];

export const IMPACT_AXES = [
  {
    title: 'Educación & Cultura',
    detail:
      'Acceso a educación virtual de alta calidad, herramientas tecnológicas y proyección de la cultura y costumbres locales.',
  },
  {
    title: 'Proyectos Productivos',
    detail:
      'Herramientas digitales para apoyar el turismo, la pesca y las actividades artesanales a nivel global.',
  },
  {
    title: 'Salud',
    detail: 'Implementación de programas de Telemedicina y atención virtual con especialistas.',
  },
  {
    title: 'Prevención de Riesgos',
    detail: 'Soporte a alertas tempranas ante eventos críticos como inundaciones y tsunamis.',
  },
  {
    title: 'Comunicación & Seguridad',
    detail:
      'Herramientas colaborativas para optimizar la comunicación entre Consejos Comunitarios, la comunidad y las autoridades.',
  },
];

export const PACIFIC_MUNICIPALITIES = [
  { name: 'Juradó', status: 'Proyección regional TVP' },
  { name: 'Bahía Solano (Ciudad Mutis)', status: 'Primera implementación activa · 14.2 km' },
  { name: 'Nuquí', status: 'Proyección regional TVP' },
  { name: 'Bajo Baudó (Pizarro)', status: 'Proyección regional TVP' },
  { name: 'Litoral del San Juan', status: 'Proyección regional TVP' },
];
