import { useEffect, useState, type FormEvent } from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { CATALOG_ITEMS, CONTACT_INFO } from '../data/flouData';
import type { SummaryExportPayload } from '../utils/exportSummary';

interface ContactSectionProps {
  preselectedService: string;
  favoriteCount: number;
  registeredWorkshopCount: number;
  onExportWithDraft: (draft: SummaryExportPayload['contactDraft']) => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  zone: string;
  clientType: string;
  selectedService: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  zone?: string;
}

const SERVICE_OPTIONS = [
  ...CATALOG_ITEMS.filter((item) => item.category !== 'infraestructura').map((item) => ({
    value: `${item.title} (${item.speedLabel})`,
    label: `${item.title} — ${item.monthlyPrice}`,
  })),
  {
    value: 'Consulta de cobertura e infraestructura',
    label: 'Consulta de cobertura e infraestructura TVP',
  },
];

const ZONE_OPTIONS = [
  'Cabecera Municipal – Ciudad Mutis (Bahía Solano)',
  'Corredor Aeropuerto José Celestino Mutis',
  'Otro sector de Bahía Solano',
  'Juradó / Nuquí / Bajo Baudó / Litoral del San Juan (interés futuro)',
];

export function ContactSection({
  preselectedService,
  favoriteCount,
  registeredWorkshopCount,
  onExportWithDraft,
}: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    zone: ZONE_OPTIONS[0],
    clientType: 'Nueva instalación de fibra óptica',
    selectedService: preselectedService || SERVICE_OPTIONS[0].value,
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (state: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (state.fullName.trim().length < 3) {
      nextErrors.fullName = 'Ingresa tu nombre completo (mínimo 3 caracteres).';
    }
    const digits = state.phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      nextErrors.phone = 'Ingresa un número de teléfono o WhatsApp válido.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(state.email.trim())) {
      nextErrors.email = 'Ingresa una dirección de correo electrónico válida.';
    }
    if (!state.zone) {
      nextErrors.zone = 'Selecciona tu municipio o sector de cobertura.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedRef(null);
      return;
    }

    const code = `FLOU-${String(Date.now()).slice(-6)}`;
    setSubmittedRef(code);
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="py-16 lg:py-24 bg-[#F5F8FD]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left column: Direct official contact channels */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs text-[#C25900] font-medium tabular-nums">
              04. Contratación y canales directos
            </p>
            <h2
              id="contacto-heading"
              className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0F47AF] tracking-tight"
            >
              Solicita viabilidad e instalación en Bahía Solano
            </h2>
            <p className="mt-4 text-base text-[#425270] leading-relaxed">
              Completa el formulario para validar cobertura sobre nuestra troncal de 14.2 km,
              agendar tu migración desde radio de OLE Pacific o acordar un enlace de Internet
              Dedicado.
            </p>

            <dl className="mt-8 divide-y divide-[#0F47AF]/15 border-t border-b border-[#0F47AF]/15">
              <div className="py-4 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#0F47AF] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-mono text-[#425270]">Teléfono y atención directa</dt>
                  <dd className="mt-0.5">
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="font-mono text-base font-semibold text-[#0F47AF] hover:underline underline-offset-4 tabular-nums"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="py-4 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#0F47AF] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-mono text-[#425270]">Correo comercial y soporte</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-mono text-base font-semibold text-[#0F47AF] hover:underline underline-offset-4"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="py-4 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#0F47AF] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-mono text-[#425270]">Cobertura inicial</dt>
                  <dd className="mt-0.5 text-sm text-[#0D1B38]">{CONTACT_INFO.location}</dd>
                </div>
              </div>
            </dl>

            {/* Export summary integrated with user's draft */}
            <div className="mt-6 p-5 bg-white border border-[#0F47AF]/18">
              <p className="text-xs font-mono text-[#425270] tabular-nums">
                Tu sesión actual · {favoriteCount} ficha(s) guardada(s) · {registeredWorkshopCount}{' '}
                taller(es) inscrito(s)
              </p>
              <p className="mt-1.5 text-sm text-[#0D1B38]">
                Descarga un expediente en texto plano con tus planes seleccionados y datos de
                solicitud para adjuntarlo por correo o WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => onExportWithDraft(form)}
                className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 border border-[#0F47AF] bg-[#F5F8FD] text-[#0F47AF] text-xs font-semibold hover:bg-[#0F47AF] hover:text-white transition-colors duration-150 cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Descargar resumen de solicitud (.txt)</span>
              </button>
            </div>
          </div>

          {/* Right column: Accessible Lead Capture Form */}
          <div className="lg:col-span-7 bg-white border border-[#0F47AF]/18 p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contacto-nombre"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Nombre y apellido <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contacto-nombre"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'error-nombre' : undefined}
                    placeholder="Ej. Carlos Andrés Mosquera"
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38] placeholder:text-[#425270]/70"
                  />
                  {errors.fullName && (
                    <p id="error-nombre" role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                      Error: {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contacto-telefono"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Teléfono / WhatsApp <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contacto-telefono"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'error-telefono' : undefined}
                    placeholder="Ej. 312 510 1969"
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38] placeholder:text-[#425270]/70 font-mono tabular-nums"
                  />
                  {errors.phone && (
                    <p id="error-telefono" role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                      Error: {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contacto-correo"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Correo electrónico <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contacto-correo"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-correo' : undefined}
                    placeholder="nombre@correo.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38] placeholder:text-[#425270]/70"
                  />
                  {errors.email && (
                    <p id="error-correo" role="alert" className="mt-1.5 text-xs font-medium text-[#B91C1C]">
                      Error: {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contacto-zona"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Municipio o sector <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contacto-zona"
                    name="zone"
                    value={form.zone}
                    onChange={(e) => setForm({ ...form, zone: e.target.value })}
                    aria-invalid={Boolean(errors.zone)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38]"
                  >
                    {ZONE_OPTIONS.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contacto-servicio"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Plan o solución de interés
                  </label>
                  <select
                    id="contacto-servicio"
                    name="selectedService"
                    value={form.selectedService}
                    onChange={(e) => setForm({ ...form, selectedService: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38]"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contacto-tipo"
                    className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                  >
                    Tipo de vinculación
                  </label>
                  <select
                    id="contacto-tipo"
                    name="clientType"
                    value={form.clientType}
                    onChange={(e) => setForm({ ...form, clientType: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38]"
                  >
                    <option value="Nueva instalación de fibra óptica">
                      Nueva instalación de fibra óptica
                    </option>
                    <option value="Migración cliente actual OLE Pacific ($170.000 COP)">
                      Migración cliente actual OLE Pacific ($170.000 COP)
                    </option>
                    <option value="Cotización Internet Dedicado (10+ Mbps)">
                      Cotización Internet Dedicado (10+ Mbps)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contacto-notas"
                  className="block text-sm font-medium text-[#0D1B38] mb-1.5"
                >
                  Dirección de referencia o requerimientos técnicos (opcional)
                </label>
                <textarea
                  id="contacto-notas"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Indica barrio en Ciudad Mutis, punto de referencia o capacidad dedicada requerida."
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38] placeholder:text-[#425270]/70"
                />
              </div>

              {submittedRef && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 bg-[#0F47AF] text-white dark-surface"
                >
                  <p className="font-mono text-xs text-[#B4E600] font-semibold tabular-nums">
                    Solicitud preparada · Referencia {submittedRef}
                  </p>
                  <p className="mt-1.5 text-sm text-white">
                    Hemos validado tu solicitud para <strong>{form.selectedService}</strong> en{' '}
                    {form.zone}. Puedes descargar tu resumen o escribirnos directamente al{' '}
                    <a href={CONTACT_INFO.phoneHref} className="underline text-[#B4E600]">
                      {CONTACT_INFO.phoneDisplay}
                    </a>{' '}
                    o a{' '}
                    <a
                      href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
                        `Solicitud FLOU ${submittedRef} - ${form.selectedService}`
                      )}`}
                      className="underline text-[#B4E600]"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 bg-[#B4E600] text-[#082458] text-sm font-bold hover:bg-[#0F47AF] hover:text-white transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  Enviar solicitud de conectividad
                </button>
                <p className="text-xs text-[#425270]">
                  Campos con <span aria-hidden="true">*</span> son obligatorios.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
