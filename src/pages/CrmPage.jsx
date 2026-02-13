import PageHeader from '../components/PageHeader'
import './CrmPage.css'

function CrmPage() {
  return (
    <div className="crm-page">
      <PageHeader title="CRM Integration" />

      <div className="crm-body">
        {/* Left - info */}
        <div className="crm-info">
          <p className="crm-tagline">Your Leads, Fully Managed</p>
          <p className="crm-desc">
            We set up and integrate a complete CRM system for your business
            &mdash; so every lead is tracked, every pipeline is visible, and
            no opportunity slips through the cracks.
          </p>

          <div className="crm-price-block">
            <span className="crm-price">RM 888</span>
            <span className="crm-price-unit">/setup</span>
          </div>

          <ul className="crm-features">
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Full CRM setup &amp; pipeline configuration
            </li>
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Lead tracking &amp; opportunity management
            </li>
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Automated follow-ups &amp; reminders
            </li>
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Dashboard with real-time analytics
            </li>
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Funnel &amp; stage distribution tracking
            </li>
            <li className="crm-feature">
              <span className="crm-check">&#10003;</span>
              Team training &amp; onboarding included
            </li>
          </ul>
        </div>

        {/* Right - CRM dashboard screenshots */}
        <div className="crm-portfolio">
          <p className="crm-results-title">Live Client Dashboards</p>
          <div className="crm-row-top">
            <div className="crm-portfolio-item">
              <div className="crm-img-wrapper">
                <img src="/assets/crm-dashboard1.png" alt="CRM Dashboard - 172 Opportunities, RM318K Value" className="crm-portfolio-img" />
              </div>
              <span className="crm-portfolio-label">172 Opportunities &mdash; RM 318K Value</span>
            </div>
            <div className="crm-portfolio-item">
              <div className="crm-img-wrapper">
                <img src="/assets/crm-dashboard2.png" alt="CRM Dashboard - 99 Opportunities, RM15.8K Value" className="crm-portfolio-img" />
              </div>
              <span className="crm-portfolio-label">99 Opportunities &mdash; RM 15.8K Value</span>
            </div>
          </div>
          <div className="crm-row-bottom">
            <div className="crm-portfolio-item">
              <div className="crm-img-wrapper">
                <img src="/assets/crm-dashboard3.png" alt="CRM Dashboard - 123 Opportunities, RM15K Value" className="crm-portfolio-img" />
              </div>
              <span className="crm-portfolio-label">123 Opportunities &mdash; RM 15K Value</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrmPage
