import { companyInfo } from '../data/companyData'
import './CoverPage.css'

function CoverPage() {
  return (
    <div className="cover-page">
      <div className="cover-eyebrow">
        <span className="cover-dot"></span>
        COMPANY PROFILE — {companyInfo.year}
      </div>

      <h1 className="cover-headline">
        AI-Powered<br />
        <span className="cover-headline-accent">Customer Acquisition.</span>
      </h1>

      <p className="cover-sub">
        {companyInfo.services} — installed into the business you already run.
      </p>

      <a className="pill-btn cover-cta" href="https://agenz.my" target="_blank" rel="noopener noreferrer">
        Book a meeting
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  )
}

export default CoverPage
