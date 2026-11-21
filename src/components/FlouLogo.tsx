interface FlouLogoProps {
  variant?: 'color' | 'light';
  showSlogan?: boolean;
  className?: string;
}

/**
 * Faithful geometric SVG of the official FLOU corporate identity from the Brand Manual:
 * - Primary brand blue: #0F47AF (Pantone 2728 C) / #FFFFFF on dark blue backgrounds
 * - Fluor green signal arcs (3 waves) & optical core: #B4E600 (Pantone 389 C)
 * - Official Jura slogan in FLOU orange: #FF8200 (Pantone 151 C)
 */
export function FlouLogo({
  variant = 'color',
  showSlogan = false,
  className = '',
}: FlouLogoProps) {
  const mainColor = variant === 'color' ? '#0F47AF' : '#FFFFFF';
  const greenColor = '#B4E600';
  const sloganColor = variant === 'color' ? '#D66500' : '#FF9426';

  return (
    <span className={`inline-flex flex-col items-start shrink-0 ${className}`}>
      <svg
        viewBox="0 0 218 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
        role="img"
        aria-label="FLOU"
      >
        {/* Letter f: upright stem + top arch stopping cleanly before diagonal gap to l */}
        <path
          d="M17 61V27C17 15.8 25.2 9 36.2 9C42.6 9 47.4 11.4 50.6 15.2"
          stroke={mainColor}
          strokeWidth="12.5"
          strokeLinecap="butt"
        />
        {/* Crossbar of f */}
        <rect x="4" y="25.5" width="31.5" height="10.5" fill={mainColor} />

        {/* Letter l: starts below diagonal cut, sweeps smoothly around bottom of O */}
        <path
          d="M52.5 21.5V43.5C52.5 54 60.2 61 71.2 61C77.8 61 83.2 58.6 87 54.4"
          stroke={mainColor}
          strokeWidth="12.5"
          strokeLinecap="butt"
        />

        {/* Letter O: bold open ring with V-shaped top aperture */}
        <path
          d="M99.5 14.5C87.2 20 82 34.4 87.8 46.8C93.6 59.2 108.4 64.5 120.8 58.6C133.2 52.8 138.4 38 132.5 25.6C130.3 20.8 126.8 17 122.4 14.5"
          stroke={mainColor}
          strokeWidth="13"
          strokeLinecap="butt"
        />

        {/* 3 official FLOU Fluor Green (#B4E600) signal arcs inside the O top gap */}
        <path
          d="M103.5 19.2C108.2 17 113.8 17 118.5 19.2"
          stroke={greenColor}
          strokeWidth="3.1"
          strokeLinecap="butt"
        />
        <path
          d="M99.8 13.8C106.8 10.6 115.2 10.6 122.2 13.8"
          stroke={greenColor}
          strokeWidth="3.3"
          strokeLinecap="butt"
        />
        <path
          d="M96.2 8.2C105.5 4.2 116.5 4.2 125.8 8.2"
          stroke={greenColor}
          strokeWidth="3.5"
          strokeLinecap="butt"
        />

        {/* Optical green core dot */}
        <circle cx="111" cy="36.8" r="8.2" fill={greenColor} />

        {/* Letter U with iconic diagonal inward-cut top terminals */}
        <path
          d="M148 9L161 22V43.5C161 50.2 166.2 54.8 173.5 54.8C180.8 54.8 186 50.2 186 43.5V22L199 9V43.5C199 57.4 188.2 66.5 173.5 66.5C158.8 66.5 148 57.4 148 43.5V9Z"
          fill={mainColor}
        />
      </svg>

      {showSlogan && (
        <span
          className="mt-1 font-display text-xs font-bold tracking-wide"
          style={{ color: sloganColor }}
        >
          Conexión que inspira
        </span>
      )}
    </span>
  );
}
