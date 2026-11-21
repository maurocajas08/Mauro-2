import { useState } from 'react';
import { Wifi } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Resilient media container enforcing Zero-Broken-Image Policy:
 * uses referrerPolicy="no-referrer", descriptive alt text, and a styled FLOU fallback.
 */
export function MediaFrame({
  src,
  alt,
  aspectClass = 'aspect-[4/3]',
  className = '',
  imgClassName = '',
  priority = false,
  caption,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0F47AF] ${aspectClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0F47AF] text-white lab-grid-dark"
        >
          <Wifi className="w-7 h-7 text-[#B4E600]" aria-hidden="true" />
          <span className="mt-2 font-display text-sm font-bold">{caption || 'FLOU Fibra Óptica'}</span>
        </div>
      )}
    </div>
  );
}
