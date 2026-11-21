import { useMemo, useState } from 'react';
import { Bookmark, Download, Maximize2, Search, X } from 'lucide-react';
import {
  CATALOG_ITEMS,
  type CatalogCategory,
  type CatalogItem,
} from '../data/flouData';
import { MediaFrame } from './MediaFrame';

interface CatalogSectionProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onOpenLightbox: (item: CatalogItem, visibleList: CatalogItem[]) => void;
  onRequestService: (item: CatalogItem) => void;
  onExportTxt: () => void;
  onExportJson: () => void;
  exportFeedback: string | null;
}

const CATEGORY_TABS: { id: CatalogCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'hogar', label: 'Hogar' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'dedicado', label: 'Dedicado' },
  { id: 'infraestructura', label: 'Infraestructura' },
];

export function CatalogSection({
  favoriteIds,
  onToggleFavorite,
  onOpenLightbox,
  onRequestService,
  onExportTxt,
  onExportJson,
  exportFeedback,
}: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>('todos');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATALOG_ITEMS.filter((item) => {
      if (onlyFavorites && !favoriteIds.includes(item.id)) {
        return false;
      }
      if (activeCategory !== 'todos' && item.category !== activeCategory) {
        return false;
      }
      if (!q) return true;
      const searchable = [
        item.code,
        item.title,
        item.categoryLabel,
        item.segment,
        item.speedLabel,
        item.monthlyPrice,
        item.summary,
        item.description,
        ...item.idealFor,
        ...item.specs.map((s) => `${s.label} ${s.value}`),
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(q);
    });
  }, [searchQuery, activeCategory, onlyFavorites, favoriteIds]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('todos');
    setOnlyFavorites(false);
  };

  return (
    <section
      id="catalogo"
      aria-labelledby="catalogo-heading"
      className="py-16 lg:py-24 border-b border-[#0F47AF]/15 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#0F47AF]/15">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-[#C25900] font-medium tabular-nums">
              01. Catálogo de planes e infraestructura óptica
            </p>
            <h2
              id="catalogo-heading"
              className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0F47AF] tracking-tight"
            >
              Planes ilimitados de fibra óptica y fichas técnicas
            </h2>
            <p className="mt-3 text-base text-[#425270]">
              Filtra por segmento o busca por velocidad, tarifa o equipo. Guarda tus opciones de
              interés en este navegador y descarga un resumen técnico completo.
            </p>
          </div>

          {/* Export summary controls */}
          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onExportTxt}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 bg-[#0F47AF] text-white text-xs sm:text-sm font-medium hover:bg-[#082458] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>
                  Exportar resumen ({favoriteIds.length > 0 ? `${favoriteIds.length} guardados` : 'completo'})
                </span>
              </button>
              <button
                type="button"
                onClick={onExportJson}
                className="inline-flex items-center justify-center min-h-[44px] px-3.5 py-2 border border-[#0F47AF]/30 bg-[#F5F8FD] text-[#0F47AF] text-xs font-mono font-semibold hover:bg-[#E8F0FF] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="Exportar ficha técnica en formato JSON"
              >
                JSON
              </button>
            </div>
            {exportFeedback && (
              <p
                role="status"
                aria-live="polite"
                className="text-xs font-mono text-[#0F47AF]"
              >
                {exportFeedback}
              </p>
            )}
          </div>
        </div>

        {/* Real-time Search + Filter Controls Toolbar */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category segmented filter bar */}
          <div
            role="group"
            aria-label="Filtrar catálogo por categoría"
            className="flex flex-wrap items-center gap-1.5"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = !onlyFavorites && activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setOnlyFavorites(false);
                    setActiveCategory(tab.id);
                  }}
                  aria-pressed={isActive}
                  className={`min-h-[44px] px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-[#0F47AF] text-white border-[#0F47AF]'
                      : 'bg-[#F5F8FD] text-[#0D1B38] border-[#0F47AF]/20 hover:bg-[#E8F0FF] hover:text-[#0F47AF]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setOnlyFavorites((prev) => !prev)}
              aria-pressed={onlyFavorites}
              className={`inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer border ${
                onlyFavorites
                  ? 'bg-[#B4E600] text-[#082458] border-[#082458]'
                  : 'bg-[#F5F8FD] text-[#0D1B38] border-[#0F47AF]/20 hover:bg-[#E8F0FF] hover:text-[#0F47AF]'
              }`}
            >
              <Bookmark className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="tabular-nums">Guardados ({favoriteIds.length})</span>
            </button>
          </div>

          {/* Live search input */}
          <div className="relative w-full lg:w-80">
            <label htmlFor="buscador-catalogo" className="sr-only">
              Buscar planes, velocidades o fichas técnicas
            </label>
            <Search
              className="w-4 h-4 text-[#425270] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="buscador-catalogo"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar velocidad, ONT, tarifa..."
              className="w-full min-h-[44px] pl-10 pr-10 py-2 bg-[#F5F8FD] border border-[#0F47AF]/25 text-sm text-[#0D1B38] placeholder:text-[#425270]/80 focus:border-[#0F47AF]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-1 top-1/2 -translate-y-1/2 min-h-[40px] min-w-[40px] flex items-center justify-center text-[#425270] hover:text-[#0F47AF] cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Live results counter */}
        <div
          className="mt-4 flex items-center justify-between text-xs font-mono text-[#425270] tabular-nums"
          aria-live="polite"
        >
          <span>
            Mostrando {filteredItems.length} de {CATALOG_ITEMS.length} fichas disponibles
          </span>
          {(searchQuery || activeCategory !== 'todos' || onlyFavorites) && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[#0F47AF] underline hover:text-[#082458] cursor-pointer py-1"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Filterable Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-8 border border-[#0F47AF]/15 bg-[#F5F8FD] p-10 text-center">
            <h3 className="font-display text-xl font-bold text-[#0F47AF]">
              {onlyFavorites && favoriteIds.length === 0
                ? 'Aún no has guardado fichas en favoritos'
                : 'No encontramos coincidencias para tu búsqueda'}
            </h3>
            <p className="mt-2 text-sm text-[#425270] max-w-md mx-auto">
              {onlyFavorites && favoriteIds.length === 0
                ? 'Usa el botón de guardar en cualquier plan o componente de red para armar tu comparativo en este navegador.'
                : 'Prueba con otro término como 6 Megas, 20 Megas, ONT, dedicado o Ciudad Mutis.'}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-[#0F47AF] text-white text-sm font-medium hover:bg-[#082458] transition-colors duration-150 cursor-pointer"
            >
              Ver catálogo completo
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isFavorite = favoriteIds.includes(item.id);
              return (
                <article
                  key={item.id}
                  className="flex flex-col bg-[#F5F8FD] border border-[#0F47AF]/18 hover:border-[#0F47AF] transition-colors duration-150"
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(item, filteredItems)}
                    className="text-left block w-full cursor-pointer group border-b border-[#0F47AF]/15"
                    aria-label={`Abrir ficha técnica de ${item.title}`}
                  >
                    <MediaFrame
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      aspectClass="aspect-[4/3]"
                      imgClassName="transition-transform duration-200 group-hover:scale-[1.03]"
                      caption={item.title}
                    />
                  </button>

                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Quiet unboxed metadata line */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#425270] tabular-nums">
                        <span>
                          {item.code} · {item.categoryLabel}
                        </span>
                        <span className="font-semibold text-[#C25900]">{item.speedLabel}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-[#0F47AF] leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-[#425270] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#0F47AF]/12">
                      <dl className="space-y-1.5 text-xs font-mono tabular-nums">
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[#425270]">Tarifa / Referencia</dt>
                          <dd className="font-semibold text-[#0D1B38] text-right">
                            {item.monthlyPrice}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[#425270]">Instalación / Alcance</dt>
                          <dd className="text-[#0D1B38] text-right">{item.installationPrice}</dd>
                        </div>
                        {item.migrationPrice && (
                          <div className="flex items-baseline justify-between gap-3">
                            <dt className="text-[#425270]">Migración OLE</dt>
                            <dd className="text-[#0F47AF] font-medium text-right">$170.000 COP</dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-5 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onOpenLightbox(item, filteredItems)}
                          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 bg-[#0F47AF] text-white text-xs font-semibold hover:bg-[#B4E600] hover:text-[#082458] transition-colors duration-150 whitespace-nowrap cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>Ficha técnica</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onToggleFavorite(item.id)}
                          aria-pressed={isFavorite}
                          aria-label={
                            isFavorite
                              ? `Quitar ${item.title} de guardados`
                              : `Guardar ${item.title} en favoritos`
                          }
                          className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] border transition-colors duration-150 cursor-pointer ${
                            isFavorite
                              ? 'bg-[#B4E600] border-[#082458] text-[#082458]'
                              : 'bg-[#F5F8FD] border-[#0F47AF]/25 text-[#0F47AF] hover:bg-[#E8F0FF]'
                          }`}
                        >
                          <Bookmark
                            className="w-4 h-4"
                            fill={isFavorite ? 'currentColor' : 'none'}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRequestService(item)}
                        className="mt-2 w-full min-h-[40px] text-xs font-medium text-[#0F47AF] hover:text-[#082458] underline-offset-4 hover:underline transition-colors duration-150 cursor-pointer"
                      >
                        Solicitar información de este servicio
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
