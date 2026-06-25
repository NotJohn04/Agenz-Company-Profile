import { companyInfo } from '../data/companyData'
import './CoverPage.css'

function CoverPage() {
  return (
    <div className="cover-page">
      {/* Eyebrow */}
      <div className="cover-eyebrow">
        <span className="cover-eyebrow-rule"></span>
        <span className="cover-eyebrow-text">COMPANY PROFILE — {companyInfo.year}</span>
        <span className="cover-eyebrow-rule"></span>
      </div>

      {/* Monkey mark */}
      <img src="/assets/agenz-monkey.png" alt="Agenz" className="cover-mark" />

      {/* Wordmark */}
      <h1 className="cover-wordmark">AGENZ</h1>

      {/* Serif tagline accent */}
      <p className="cover-tagline">{companyInfo.tagline}</p>

      {/* Services line */}
      <div className="cover-services">
        <span className="cover-services-line"></span>
        <span className="cover-services-text">{companyInfo.services}</span>
        <span className="cover-services-line"></span>
      </div>

      {/* Footer marker */}
      <div className="cover-footer">
        <span className="cover-footer-label">PRESENTED BY</span>
        <span className="cover-footer-name">{companyInfo.name.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default CoverPage
