import './SlideLayout.css'

function SlideLayout({ children }) {
  return (
    <div className="slide-layout">
      {/* Static gradient blobs */}
      <div className="sl-blob sl-blob-1"></div>
      <div className="sl-blob sl-blob-2"></div>
      <div className="sl-blob sl-blob-3"></div>
      <div className="sl-blob sl-blob-4"></div>
      <div className="sl-blob sl-blob-5"></div>
      <div className="sl-blob sl-blob-6"></div>

      {/* Subtle dot grid overlay */}
      <div className="sl-dot-grid"></div>

      {/* Middle area designs - light mode only */}
      <div className="sl-mid-glow sl-mid-glow-left"></div>
      <div className="sl-mid-glow sl-mid-glow-right"></div>
      <div className="sl-mid-ring sl-mid-ring-1"></div>
      <div className="sl-mid-ring sl-mid-ring-2"></div>

      {/* Circuit pattern overlay */}
      <svg className="sl-circuit-pattern" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        {/* Top-left circuits */}
        <g stroke="var(--cyan)" strokeWidth="1" fill="none" opacity="0.18">
          <path d="M0 200 H120 L150 230 H280" />
          <path d="M0 220 H80 L100 240 H200 L220 220 H320" />
          <path d="M0 260 H60 L90 290 H180" />
          <path d="M0 310 H40 L70 280 H160 L190 310 H260" />
          <path d="M0 160 H90 L110 140 H220 L250 170 H340" />
          <circle cx="280" cy="230" r="3" fill="var(--cyan)" />
          <circle cx="320" cy="220" r="3" fill="var(--cyan)" />
          <circle cx="180" cy="290" r="3" fill="var(--cyan)" />
          <circle cx="260" cy="310" r="3" fill="var(--cyan)" />
          <circle cx="340" cy="170" r="3" fill="var(--cyan)" />
          <rect x="148" y="228" width="4" height="4" fill="var(--cyan)" />
          <rect x="108" y="138" width="4" height="4" fill="var(--cyan)" />
        </g>

        {/* Top-right circuits */}
        <g stroke="var(--purple)" strokeWidth="1" fill="none" opacity="0.18">
          <path d="M1920 150 H1780 L1750 180 H1640" />
          <path d="M1920 180 H1820 L1800 200 H1700 L1680 180 H1580" />
          <path d="M1920 210 H1850 L1820 240 H1720" />
          <path d="M1920 260 H1870 L1840 230 H1740 L1710 260 H1620" />
          <path d="M1920 120 H1810 L1780 150 H1680 L1650 120 H1550" />
          <circle cx="1640" cy="180" r="3" fill="var(--purple)" />
          <circle cx="1580" cy="180" r="3" fill="var(--purple)" />
          <circle cx="1720" cy="240" r="3" fill="var(--purple)" />
          <circle cx="1620" cy="260" r="3" fill="var(--purple)" />
          <circle cx="1550" cy="120" r="3" fill="var(--purple)" />
        </g>

        {/* Top connector bar */}
        <g stroke="var(--blue)" strokeWidth="0.5" fill="none" opacity="0.08">
          <path d="M400 180 H550 L580 200 H750 L780 180 H920" />
          <path d="M1000 200 H1150 L1180 180 H1350 L1380 200 H1520" />
          <circle cx="920" cy="180" r="2" fill="var(--blue)" />
          <circle cx="1000" cy="200" r="2" fill="var(--blue)" />
        </g>

        {/* Bottom-left circuits */}
        <g stroke="var(--blue)" strokeWidth="1" fill="none" opacity="0.15">
          <path d="M0 850 H150 L180 880 H320" />
          <path d="M0 880 H100 L130 910 H250 L270 890 H400" />
          <path d="M0 920 H70 L100 950 H220 L250 920 H350" />
          <path d="M0 800 H110 L140 830 H280 L310 800 H420" />
          <circle cx="320" cy="880" r="3" fill="var(--blue)" />
          <circle cx="400" cy="890" r="3" fill="var(--blue)" />
          <circle cx="350" cy="920" r="3" fill="var(--blue)" />
          <circle cx="420" cy="800" r="3" fill="var(--blue)" />
          <rect x="248" y="888" width="4" height="4" fill="var(--blue)" />
        </g>

        {/* Bottom-right circuits */}
        <g stroke="var(--cyan)" strokeWidth="1" fill="none" opacity="0.15">
          <path d="M1920 880 H1750 L1720 910 H1600" />
          <path d="M1920 920 H1800 L1770 890 H1650" />
          <path d="M1920 840 H1830 L1800 870 H1680 L1650 840 H1560" />
          <path d="M1920 960 H1850 L1820 930 H1700 L1670 960 H1580" />
          <circle cx="1600" cy="910" r="3" fill="var(--cyan)" />
          <circle cx="1650" cy="890" r="3" fill="var(--cyan)" />
          <circle cx="1560" cy="840" r="3" fill="var(--cyan)" />
          <circle cx="1580" cy="960" r="3" fill="var(--cyan)" />
        </g>

        {/* Bottom connector bar */}
        <g stroke="var(--purple)" strokeWidth="0.5" fill="none" opacity="0.08">
          <path d="M450 900 H600 L630 880 H800 L830 900 H980" />
          <path d="M1050 880 H1200 L1230 900 H1400 L1430 880 H1550" />
          <circle cx="980" cy="900" r="2" fill="var(--purple)" />
          <circle cx="1050" cy="880" r="2" fill="var(--purple)" />
        </g>

        {/* Center-left subtle connector */}
        <g stroke="var(--cyan)" strokeWidth="0.5" fill="none" opacity="0.1">
          <path d="M0 540 H60 L80 520 H140" />
          <path d="M0 560 H40 L60 580 H120" />
          <circle cx="140" cy="520" r="2" fill="var(--cyan)" />
          <circle cx="120" cy="580" r="2" fill="var(--cyan)" />
        </g>

        {/* Center-right subtle connector */}
        <g stroke="var(--purple)" strokeWidth="0.5" fill="none" opacity="0.1">
          <path d="M1920 520 H1860 L1840 540 H1780" />
          <path d="M1920 550 H1880 L1860 530 H1800" />
          <circle cx="1780" cy="540" r="2" fill="var(--purple)" />
          <circle cx="1800" cy="530" r="2" fill="var(--purple)" />
        </g>

        {/* Light-mode-only center circuits (hidden in dark via CSS) */}
        <g className="sl-center-circuits" stroke="var(--cyan)" strokeWidth="0.5" fill="none" opacity="0.12">
          <path d="M700 480 H780 L800 460 H880" />
          <path d="M1040 480 H1120 L1140 500 H1220" />
          <path d="M700 600 H760 L780 620 H860" />
          <path d="M1060 600 H1140 L1160 580 H1240" />
          <circle cx="880" cy="460" r="2" fill="var(--cyan)" />
          <circle cx="1220" cy="500" r="2" fill="var(--cyan)" />
          <circle cx="860" cy="620" r="2" fill="var(--cyan)" />
          <circle cx="1240" cy="580" r="2" fill="var(--cyan)" />
        </g>

        {/* Diagonal accent lines */}
        <line x1="0" y1="0" x2="300" y2="300" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.06" />
        <line x1="1920" y1="0" x2="1620" y2="300" stroke="var(--purple)" strokeWidth="0.5" opacity="0.06" />
        <line x1="0" y1="1080" x2="300" y2="780" stroke="var(--blue)" strokeWidth="0.5" opacity="0.06" />
        <line x1="1920" y1="1080" x2="1620" y2="780" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.06" />

        {/* Extra diagonal crosses in corners - light mode enhanced */}
        <line x1="40" y1="40" x2="160" y2="160" stroke="var(--cyan)" strokeWidth="0.3" opacity="0.05" />
        <line x1="1880" y1="40" x2="1760" y2="160" stroke="var(--purple)" strokeWidth="0.3" opacity="0.05" />
        <line x1="40" y1="1040" x2="160" y2="920" stroke="var(--blue)" strokeWidth="0.3" opacity="0.05" />
        <line x1="1880" y1="1040" x2="1760" y2="920" stroke="var(--purple)" strokeWidth="0.3" opacity="0.05" />
      </svg>

      {/* Horizontal accent lines top & bottom */}
      <div className="sl-h-accent sl-h-accent-top"></div>
      <div className="sl-h-accent sl-h-accent-bottom"></div>

      {/* Extra gradient washes - light mode enhanced */}
      <div className="sl-wash sl-wash-tl"></div>
      <div className="sl-wash sl-wash-br"></div>
      <div className="sl-wash sl-wash-center"></div>

      {/* Gradient border strips along edges */}
      <div className="sl-edge-strip sl-edge-strip-top"></div>
      <div className="sl-edge-strip sl-edge-strip-bottom"></div>
      <div className="sl-edge-strip sl-edge-strip-left"></div>
      <div className="sl-edge-strip sl-edge-strip-right"></div>

      {/* Main content */}
      <div className="sl-content">
        {children}
      </div>

      {/* Corner accents */}
      <div className="sl-corner sl-corner-tl"></div>
      <div className="sl-corner sl-corner-tr"></div>
      <div className="sl-corner sl-corner-bl"></div>
      <div className="sl-corner sl-corner-br"></div>

      {/* Side accent lines */}
      <div className="sl-side-accent sl-side-accent-left"></div>
      <div className="sl-side-accent sl-side-accent-right"></div>
    </div>
  )
}

export default SlideLayout
