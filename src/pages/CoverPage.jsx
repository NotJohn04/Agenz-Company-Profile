import { companyInfo } from '../data/companyData'
import './CoverPage.css'

function CoverPage() {
  return (
    <div className="cover-page">
      {/* Top bar */}
      <div className="cover-top-bar">
        <div className="cover-top-bar-line"></div>
        <span className="cover-top-bar-text">COMPANY PROFILE {companyInfo.year}</span>
        <div className="cover-top-bar-line"></div>
      </div>

      {/* Logo */}
      <div className="cover-logo-section">
        <img src="/assets/logo.png" alt={companyInfo.name} className="cover-logo-image cover-logo-dark" />
        <img src="/assets/logo-light.png" alt={companyInfo.name} className="cover-logo-image cover-logo-light" />
      </div>

      {/* Tagline */}
      <p className="cover-tagline">{companyInfo.tagline}</p>

      {/* Divider */}
      <div className="cover-divider">
        <div className="cover-divider-line"></div>
        <div className="cover-divider-diamond"></div>
        <div className="cover-divider-line"></div>
      </div>

      {/* Subtitle */}
      <p className="cover-subtitle">{companyInfo.services}</p>

      {/* Presented by */}
      <div className="cover-presented-by">
        <span className="cover-presented-label">Presented by</span>
        <span className="cover-presented-name">{companyInfo.name}</span>
      </div>

      {/* Bottom decorative bar */}
      <div className="cover-bottom-bar">
        <div className="cover-bottom-bar-glow"></div>
      </div>
    </div>
  )
}

export default CoverPage
