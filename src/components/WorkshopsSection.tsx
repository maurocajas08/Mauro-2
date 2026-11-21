import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MEDIA_ASSETS, WORKSHOPS, type WorkshopSession } from '../data/flouData';
import { MediaFrame } from './MediaFrame';

interface WorkshopsSectionProps {
  registeredIds: string[];
  onRegisterWorkshop: (workshopId: string) => void;
  onUnregisterWorkshop: (workshopId: string) => void;
}

export function WorkshopsSection({
  registeredIds,
  onRegisterWorkshop,
  onUnregisterWorkshop,
}: WorkshopsSectionProps) {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopSession>(WORKSHOPS[0]);
  const [participantName, setParticipantName] = useState('');
  const [participantContact, setParticipantContact] = useState('');
  const [organization, setOrganization] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (participantName.trim().length < 3) {
      setFormError('Ingresa tu nombre completo para registrar el cupo.');
      return;
    }

    if (participantContact.trim().length < 7) {
      setFormError('Ingresa un teléfono o correo electrónico válido de contacto.');
      return;
    }

    onRegisterWorkshop(selectedWorkshop.id);
    setConfirmationMessage(
      `Inscripción registrada en "${selectedWorkshop.title}" para ${participantName.trim()}. Quedó guardada en tu resumen local.`
    );
    setParticipantName('');
    setParticipantContact('');
    setOrganization('');
  };

  return (
    <section
      id="talleres"
      aria-labelledby="talleres-heading"
      className="py-16 lg:py-24 border-b border-[#0F47AF]/15 bg-[#F5F8FD]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#C25900] font-medium tabular-nums">
            02. Talleres, migración y apropiación digital
          </p>
          <h2
            id="talleres-heading"
            className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0F47AF] tracking-tight"
          >
            Jornadas técnicas e inscripción comunitaria en Bahía Solano
          </h2>
          <p className="mt-3 text-base text-[#425270]">
            Acompañamos el despliegue de la fibra óptica con espacios de capacitación en redes de
            telecomunicaciones liderados por Lean Integral TIC y jornadas de migración para la
            comunidad de Ciudad Mutis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: Workshop list */}
          <div className="lg:col-span-7 divide-y divide-[#0F47AF]/15 border-t border-b border-[#0F47AF]/15 bg-white">
            {WORKSHOPS.map((session) => {
              const isSelected = selectedWorkshop.id === session.id;
              const isRegistered = registeredIds.includes(session.id);

              return (
                <article
                  key={session.id}
                  className={`py-6 px-4 sm:px-6 transition-colors duration-150 ${
                    isSelected ? 'bg-[#EEF3FB]' : 'bg-white hover:bg-[#F5F8FD]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#425270] tabular-nums">
                    <span>
                      {session.code} · {session.axis} · {session.duration}
                    </span>
                    {isRegistered && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#0F47AF]">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        Inscrito
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-[#0F47AF]">
                    {session.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#425270] leading-relaxed">
                    {session.objective}
                  </p>

                  <p className="mt-3 text-xs font-mono text-[#425270]">
                    Dirigido a: {session.audience} · {session.location}
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-[#425270] list-disc list-inside">
                    {session.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedWorkshop(session);
                        setConfirmationMessage(null);
                      }}
                      className={`min-h-[44px] px-4 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer border ${
                        isSelected
                          ? 'bg-[#0F47AF] text-white border-[#0F47AF]'
                          : 'bg-white text-[#0F47AF] border-[#0F47AF]/30 hover:bg-[#E8F0FF]'
                      }`}
                    >
                      {isSelected ? 'Seleccionado para inscripción' : 'Seleccionar jornada'}
                    </button>

                    {isRegistered && (
                      <button
                        type="button"
                        onClick={() => onUnregisterWorkshop(session.id)}
                        className="min-h-[44px] px-3 py-2 text-xs text-[#425270] hover:text-[#0F47AF] underline underline-offset-4 cursor-pointer"
                      >
                        Cancelar inscripción
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right column: Workshop documentary photo + Registration form */}
          <div className="lg:col-span-5 bg-[#0F47AF] text-white dark-surface border border-[#082458]">
            <MediaFrame
              src={MEDIA_ASSETS.technicalWorkshops}
              alt="Ingenieros y técnicos en telecomunicaciones realizando empalme de fibra óptica durante jornada práctica de formación"
              aspectClass="aspect-[16/10]"
              caption="Capacitación técnica en redes ópticas"
            />
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-[#B4E600] font-semibold tabular-nums">
                Inscripción abierta · {selectedWorkshop.code}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                {selectedWorkshop.title}
              </h3>
              <p className="mt-2 text-sm text-white/85">
                {selectedWorkshop.modality} · Duración {selectedWorkshop.duration}
              </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="taller-nombre"
                  className="block text-xs font-medium text-white mb-1.5"
                >
                  Nombre completo <span aria-hidden="true">*</span>
                </label>
                <input
                  id="taller-nombre"
                  type="text"
                  required
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                  placeholder="Ej. María Camila Córdoba"
                  className="w-full min-h-[44px] px-3.5 py-2 bg-[#082458] border border-white/30 text-sm text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label
                  htmlFor="taller-contacto"
                  className="block text-xs font-medium text-white mb-1.5"
                >
                  Teléfono / WhatsApp o correo <span aria-hidden="true">*</span>
                </label>
                <input
                  id="taller-contacto"
                  type="text"
                  required
                  value={participantContact}
                  onChange={(e) => setParticipantContact(e.target.value)}
                  placeholder="Ej. 312 000 0000 o correo@dominio.co"
                  className="w-full min-h-[44px] px-3.5 py-2 bg-[#082458] border border-white/30 text-sm text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label
                  htmlFor="taller-org"
                  className="block text-xs font-medium text-white mb-1.5"
                >
                  Hogar, comercio, consejo comunitario o entidad (opcional)
                </label>
                <input
                  id="taller-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Ej. Posada turística Ciudad Mutis"
                  className="w-full min-h-[44px] px-3.5 py-2 bg-[#082458] border border-white/30 text-sm text-white placeholder:text-white/60"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-semibold text-[#B4E600]">
                  Error de validación: {formError}
                </p>
              )}

              {confirmationMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-3.5 border border-[#B4E600] bg-[#082458] text-xs text-white leading-relaxed"
                >
                  {confirmationMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center min-h-[48px] px-5 py-3 bg-[#B4E600] text-[#082458] text-sm font-bold hover:bg-white transition-colors duration-150 cursor-pointer"
              >
                Confirmar inscripción a esta jornada
              </button>
            </form>

              <p className="mt-5 pt-4 border-t border-white/20 text-xs text-white/85 leading-relaxed">
                Tus inscripciones se guardan automáticamente en este navegador y se incluyen cuando
                exportas tu resumen en la sección de catálogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
