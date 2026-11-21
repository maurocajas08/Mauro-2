import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Check, X } from 'lucide-react';
import type { CatalogItem } from '../data/flouData';
import { MediaFrame } from './MediaFrame';
import { TechnicalSchematic } from './TechnicalSchematic';

interface SpecLightboxProps {
  item: CatalogItem | null;
  itemsList: CatalogItem[];
  isFavorite: boolean;
  onClose: () => void;
  onSelectItem: (item: CatalogItem) => void;
  onToggleFavorite: (id: string) => void;
  onRequestService: (item: CatalogItem) => void;
}

export function SpecLightbox({
  item,
  itemsList,
  isFavorite,
  onClose,
  onSelectItem,
  onToggleFavorite,
  onRequestService,
}: SpecLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [visualMode, setVisualMode] = useState<'foto' | 'esquema'>('foto');

  const currentIndex = item ? itemsList.findIndex((entry) => entry.id === item.id) : -1;
  const hasMultiple = itemsList.length > 1 && currentIndex !== -1;

  const handlePrev = () => {
    if (!hasMultiple) return;
    const prevIndex = (currentIndex - 1 + itemsList.length) % itemsList.length;
    onSelectItem(itemsList[prevIndex]);
  };

  const handleNext = () => {
    if (!hasMultiple) return;
    const nextIndex = (currentIndex + 1) % itemsList.length;
    onSelectItem(itemsList[nextIndex]);
  };

  useEffect(() => {
    if (!item) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowLeft' && hasMultiple) {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + itemsList.length) % itemsList.length;
        onSelectItem(itemsList[prevIndex]);
      } else if (event.key === 'ArrowRight' && hasMultiple) {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % itemsList.length;
        onSelectItem(itemsList[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [item, currentIndex, hasMultiple, itemsList, onClose, onSelectItem]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#082458]/75 p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white border border-[#0F47AF] my-auto max-h-[92vh] overflow-y-auto">
        {/* Top bar in FLOU Cobalt Blue */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-6 py-3.5 bg-[#0F47AF] text-white dark-surface">
          <div className="flex items-center gap-3 font-mono text-xs tabular-nums min-w-0">
            <span className="text-[#B4E600] font-semibold">{item.code}</span>
            <span aria-hidden="true">/</span>
            <span className="truncate">{item.segment}</span>
            {hasMultiple && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  {currentIndex + 1} de {itemsList.length}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Ficha anterior"
                  className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] border border-white/30 text-white hover:bg-[#B4E600] hover:text-[#082458] transition-colors duration-150 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Ficha siguiente"
                  className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] border border-white/30 text-white hover:bg-[#B4E600] hover:text-[#082458] transition-colors duration-150 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </>
            )}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar visor de ficha técnica"
              className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] bg-white text-[#0F47AF] hover:bg-[#B4E600] hover:text-[#082458] transition-colors duration-150 cursor-pointer ml-1"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Lightbox Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left visual photo + schematic switcher & applications */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#0F47AF]/15 bg-[#F5F8FD] flex flex-col justify-between">
            <div>
              {visualMode === 'foto' ? (
                <MediaFrame
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  aspectClass="aspect-[4/3]"
                  caption={item.title}
                />
              ) : (
                <TechnicalSchematic type={item.schematic} altText={item.altText} />
              )}

              {/* Switcher between editorial photograph and optical laboratory blueprint */}
              <div
                role="group"
                aria-label="Cambiar vista visual de la ficha"
                className="grid grid-cols-2 border-b border-[#0F47AF]/15 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setVisualMode('foto')}
                  aria-pressed={visualMode === 'foto'}
                  className={`min-h-[44px] px-3 py-2 text-xs font-mono font-semibold transition-colors duration-150 cursor-pointer ${
                    visualMode === 'foto'
                      ? 'bg-[#0F47AF] text-white'
                      : 'text-[#0F47AF] hover:bg-[#EEF3FB]'
                  }`}
                >
                  Fotografía
                </button>
                <button
                  type="button"
                  onClick={() => setVisualMode('esquema')}
                  aria-pressed={visualMode === 'esquema'}
                  className={`min-h-[44px] px-3 py-2 text-xs font-mono font-semibold border-l border-[#0F47AF]/15 transition-colors duration-150 cursor-pointer ${
                    visualMode === 'esquema'
                      ? 'bg-[#0F47AF] text-white'
                      : 'text-[#0F47AF] hover:bg-[#EEF3FB]'
                  }`}
                >
                  Esquema técnico
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-mono text-xs font-semibold text-[#0F47AF] tracking-wide">
                Aplicaciones recomendadas
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-[#425270]">
                {item.idealFor.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0F47AF] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right technical specifications datasheet */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <p className="font-mono text-xs text-[#C25900] font-medium">
                {item.categoryLabel} · Capacidad {item.speedLabel}
              </p>
              <h2
                id="lightbox-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0F47AF]"
              >
                {item.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#425270] leading-relaxed">
                {item.description}
              </p>

              {/* Spec sheet table */}
              <div className="mt-6 border-t border-[#0F47AF]/15">
                <h3 className="sr-only">Especificaciones técnicas</h3>
                <dl className="divide-y divide-[#0F47AF]/12">
                  {item.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm"
                    >
                      <dt className="sm:col-span-5 text-[#425270] font-medium">{spec.label}</dt>
                      <dd className="sm:col-span-7 font-mono text-xs sm:text-sm text-[#0D1B38] sm:text-right tabular-nums">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Action bar */}
            <div className="mt-8 pt-5 border-t border-[#0F47AF]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onRequestService(item);
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-[#B4E600] text-[#082458] text-sm font-semibold hover:bg-[#0F47AF] hover:text-white transition-colors duration-150 cursor-pointer"
              >
                Solicitar este servicio
              </button>

              <button
                type="button"
                onClick={() => onToggleFavorite(item.id)}
                aria-pressed={isFavorite}
                className={`inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 border text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  isFavorite
                    ? 'bg-[#0F47AF] text-[#B4E600] border-[#0F47AF]'
                    : 'bg-[#F5F8FD] text-[#0F47AF] border-[#0F47AF]/25 hover:bg-[#E8F0FF]'
                }`}
              >
                <Bookmark
                  className="w-4 h-4 shrink-0"
                  fill={isFavorite ? 'currentColor' : 'none'}
                  aria-hidden="true"
                />
                <span>{isFavorite ? 'Guardado' : 'Guardar ficha'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
