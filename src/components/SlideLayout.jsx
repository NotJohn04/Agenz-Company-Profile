import './SlideLayout.css'

function SlideLayout({ children }) {
  return (
    <div className="slide-layout">
      {/* Paper grain + subtle grid */}
      <div className="sl-grain"></div>
      <div className="sl-grid"></div>

      {/* Inset editorial frame */}
      <div className="sl-frame"></div>

      {/* Corner mastheads — mono chrome */}
      <div className="sl-mast sl-mast-tl">AGENZ<span className="sl-mast-dim"> / CREATIVE SYSTEMS</span></div>
      <div className="sl-mast sl-mast-tr">FIELD NOTE №07</div>
      <div className="sl-mast sl-mast-bl">CONTEMPORARY YOUTH EDITORIAL REALISM</div>
      <div className="sl-mast sl-mast-br">V4.0</div>

      {/* Corner ticks */}
      <div className="sl-tick sl-tick-tl"></div>
      <div className="sl-tick sl-tick-tr"></div>
      <div className="sl-tick sl-tick-bl"></div>
      <div className="sl-tick sl-tick-br"></div>

      {/* Main content */}
      <div className="sl-content">
        {children}
      </div>
    </div>
  )
}

export default SlideLayout
