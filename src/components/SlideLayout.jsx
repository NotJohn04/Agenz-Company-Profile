import './SlideLayout.css'

function SlideLayout({ children }) {
  return (
    <div className="slide-layout">
      {/* Soft corner wash — like the site hero */}
      <div className="sl-wash"></div>

      {/* Masthead chrome */}
      <div className="sl-masthead">
        <div className="sl-brand">
          <img src="/assets/agenz-mark.png" alt="" className="sl-brand-mark" />
          <span className="sl-brand-word">AGENZ</span>
        </div>
        <span className="sl-masthead-ref">COMPANY PROFILE · 2025</span>
      </div>
      <div className="sl-masthead-rule"></div>

      {/* Main content */}
      <div className="sl-content">
        {children}
      </div>

      {/* Footer chrome */}
      <div className="sl-footer">
        <span>AGENZ.MY — YOUR AI DEPARTMENT</span>
        <span>KUALA LUMPUR</span>
      </div>
    </div>
  )
}

export default SlideLayout
