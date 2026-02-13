import { contactData, companyInfo } from '../data/companyData'
import GradientDivider from '../components/GradientDivider'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-logo-section">
        <img src="/assets/logo.png" alt={companyInfo.name} className="contact-logo contact-logo-dark" />
        <img src="/assets/logo-light.png" alt={companyInfo.name} className="contact-logo contact-logo-light" />
      </div>

      <p className="contact-cta">{contactData.cta}</p>

      <GradientDivider />

      <div className="contact-grid">
        <a href={`mailto:${contactData.email}`} className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="contact-card-label">Email</span>
          <span className="contact-card-value">{contactData.email}</span>
        </a>

        <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.74 20.99 20.48 21 20.22 21C10.96 21 3 13.04 3 3.78C3 3.52 3.01 3.26 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.35 8.3 3.88 8.52 4.38L7.02 5.88C6.83 6.07 6.78 6.36 6.9 6.59C8.07 8.91 10.09 10.93 12.41 12.1C12.64 12.22 12.93 12.17 13.12 11.98L14.62 10.48C15.12 10.7 15.65 10.86 16.19 10.95C16.66 11.03 17 11.44 17 11.92V14.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="contact-card-label">Phone</span>
          <span className="contact-card-value">{contactData.phone}</span>
        </a>

        <a href={`https://${contactData.website}`} target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 2C14.5 4.73 16 8.24 16 12C16 15.76 14.5 19.27 12 22C9.5 19.27 8 15.76 8 12C8 8.24 9.5 4.73 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="contact-card-label">Website</span>
          <span className="contact-card-value">{contactData.website}</span>
        </a>

        <div className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.03 7.03 1 12 1C16.97 1 21 5.03 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="contact-card-label">Address</span>
          <span className="contact-card-value">{contactData.address}</span>
        </div>

        <a href={contactData.socials.facebook} target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="contact-card-label">Facebook</span>
          <span className="contact-card-value">agenz.my</span>
        </a>

        <a href={contactData.socials.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="contact-card-label">Instagram</span>
          <span className="contact-card-value">@agenz_my</span>
        </a>
      </div>

      <div className="contact-bottom-bar">
        <div className="contact-bottom-glow"></div>
      </div>
    </div>
  )
}

export default ContactPage
