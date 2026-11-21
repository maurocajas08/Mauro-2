import { useCallback, useEffect, useState } from 'react';
import { AboutProjectSection } from './components/AboutProjectSection';
import { CatalogSection } from './components/CatalogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpecLightbox } from './components/SpecLightbox';
import { WorkshopsSection } from './components/WorkshopsSection';
import { CATALOG_ITEMS, type CatalogItem } from './data/flouData';
import {
  exportSummaryJson,
  exportSummaryTxt,
  type SummaryExportPayload,
} from './utils/exportSummary';

const FAVORITES_STORAGE_KEY = 'flou_fibra_favorites_v1';
const WORKSHOPS_STORAGE_KEY = 'flou_fibra_workshops_v1';

function readStoredIds(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() =>
    readStoredIds(FAVORITES_STORAGE_KEY)
  );
  const [registeredWorkshopIds, setRegisteredWorkshopIds] = useState<string[]>(() =>
    readStoredIds(WORKSHOPS_STORAGE_KEY)
  );
  const [lightboxItem, setLightboxItem] = useState<CatalogItem | null>(null);
  const [lightboxList, setLightboxList] = useState<CatalogItem[]>(CATALOG_ITEMS);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [exportFeedback, setExportFeedback] = useState<string | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch {
      // Ignore storage quota or private-mode errors gracefully
    }
  }, [favoriteIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(WORKSHOPS_STORAGE_KEY, JSON.stringify(registeredWorkshopIds));
    } catch {
      // Ignore storage quota or private-mode errors gracefully
    }
  }, [registeredWorkshopIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleToggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleRegisterWorkshop = useCallback((workshopId: string) => {
    setRegisteredWorkshopIds((prev) => (prev.includes(workshopId) ? prev : [...prev, workshopId]));
  }, []);

  const handleUnregisterWorkshop = useCallback((workshopId: string) => {
    setRegisteredWorkshopIds((prev) => prev.filter((id) => id !== workshopId));
  }, []);

  const handleOpenLightbox = useCallback((item: CatalogItem, visibleList: CatalogItem[]) => {
    setLightboxList(visibleList);
    setLightboxItem(item);
  }, []);

  const handleRequestService = useCallback(
    (item: CatalogItem) => {
      if (item.category === 'infraestructura') {
        setPreselectedService('Consulta de cobertura e infraestructura');
      } else {
        setPreselectedService(`${item.title} (${item.speedLabel})`);
      }
      scrollToSection('contacto');
    },
    [scrollToSection]
  );

  const showTemporaryFeedback = useCallback((message: string) => {
    setExportFeedback(message);
    window.setTimeout(() => {
      setExportFeedback(null);
    }, 4000);
  }, []);

  const handleExportTxt = useCallback(() => {
    exportSummaryTxt({ favoriteIds, registeredWorkshopIds });
    showTemporaryFeedback('Resumen descargado en formato TXT.');
  }, [favoriteIds, registeredWorkshopIds, showTemporaryFeedback]);

  const handleExportJson = useCallback(() => {
    exportSummaryJson({ favoriteIds, registeredWorkshopIds });
    showTemporaryFeedback('Resumen descargado en formato JSON.');
  }, [favoriteIds, registeredWorkshopIds, showTemporaryFeedback]);

  const handleExportWithDraft = useCallback(
    (draft: SummaryExportPayload['contactDraft']) => {
      exportSummaryTxt({
        favoriteIds,
        registeredWorkshopIds,
        contactDraft: draft,
      });
    },
    [favoriteIds, registeredWorkshopIds]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FD] text-[#0D1B38] overflow-x-clip">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#0F47AF] focus:text-[#B4E600] focus:text-sm focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      <Header onContactClick={() => scrollToSection('contacto')} />

      <main id="contenido-principal" className="flex-1">
        <Hero onExploreCatalog={() => scrollToSection('catalogo')} />

        <CatalogSection
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          onOpenLightbox={handleOpenLightbox}
          onRequestService={handleRequestService}
          onExportTxt={handleExportTxt}
          onExportJson={handleExportJson}
          exportFeedback={exportFeedback}
        />

        <WorkshopsSection
          registeredIds={registeredWorkshopIds}
          onRegisterWorkshop={handleRegisterWorkshop}
          onUnregisterWorkshop={handleUnregisterWorkshop}
        />

        <AboutProjectSection />

        <ContactSection
          preselectedService={preselectedService}
          favoriteCount={favoriteIds.length}
          registeredWorkshopCount={registeredWorkshopIds.length}
          onExportWithDraft={handleExportWithDraft}
        />
      </main>

      <Footer />

      <SpecLightbox
        item={lightboxItem}
        itemsList={lightboxList}
        isFavorite={lightboxItem ? favoriteIds.includes(lightboxItem.id) : false}
        onClose={() => setLightboxItem(null)}
        onSelectItem={(next) => setLightboxItem(next)}
        onToggleFavorite={handleToggleFavorite}
        onRequestService={handleRequestService}
      />
    </div>
  );
}
