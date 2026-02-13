import { pricingData } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import './PricingPage.css'

function PricingPage() {
  return (
    <div className="pricing-page">
      <PageHeader title="Pricing Plans" subtitle="Transparent pricing for every stage of growth" />

      <div className="pricing-grid">
        {pricingData.map((plan) => (
          <div
            key={plan.tier}
            className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
          >
            {plan.highlighted && <div className="pricing-badge">Most Popular</div>}
            <h3 className="pricing-tier">{plan.tier}</h3>
            <p className="pricing-desc">{plan.description}</p>
            <div className="pricing-price-row">
              <span className="pricing-price">{plan.price}</span>
              <span className="pricing-period">{plan.period}</span>
            </div>

            {plan.guarantee && (
              <span className="pricing-guarantee-tag">&#8635; 100% money-back guarantee</span>
            )}

            <ul className="pricing-features">
              {plan.features.map((feature) => (
                <li key={feature.text} className={`pricing-feature ${!feature.included ? 'pricing-feature-excluded' : ''}`}>
                  {feature.included ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pricing-check">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pricing-x">
                      <path d="M4 4L12 12M12 4L4 12" stroke="rgba(245,245,245,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            <div className="pricing-card-bottom">
              <button className={`pricing-btn ${plan.highlighted ? 'pricing-btn-filled' : ''}`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-notes">
        <span className="pricing-note">10% off for 6+ months prepaid &bull; 15% off for 10+ months + Free Website (worth RM 2,676)</span>
        <div className="pricing-savings">
          <span className="pricing-savings-label">Total if purchased individually (monthly equivalent)</span>
          <div className="pricing-savings-row">
            <span className="pricing-savings-old">RM 10,000+</span>
            <span className="pricing-savings-new">from RM 1,888/mo</span>
          </div>
          <span className="pricing-savings-tag">Save up to 80% with our bundled packages</span>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
