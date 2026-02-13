import PageHeader from '../components/PageHeader'
import './SocialMediaPage.css'

function SocialMediaPage() {
  return (
    <div className="smm-page">
      <PageHeader title="Social Media Management" />

      <div className="smm-body">
        {/* Left - info */}
        <div className="smm-info">
          <p className="smm-tagline">We Run Your Socials For You</p>
          <p className="smm-desc">
            From content planning and scheduling to managing 10+ client pages
            at once &mdash; we handle everything so you never have to think
            about what to post again.
          </p>

          <div className="smm-price-block">
            <span className="smm-price">RM 888</span>
            <span className="smm-price-unit">/month</span>
          </div>

          <ul className="smm-features">
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              Full content calendar planning &amp; scheduling
            </li>
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              Multi-platform management (FB, IG, TikTok &amp; more)
            </li>
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              AI-powered post creation &amp; copywriting
            </li>
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              Weekly content batches &mdash; auto-published
            </li>
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              Engagement tracking &amp; monthly reports
            </li>
            <li className="smm-feature">
              <span className="smm-check">&#10003;</span>
              Currently managing 10+ brand pages
            </li>
          </ul>
        </div>

        {/* Right - portfolio showcase */}
        <div className="smm-portfolio">
          <div className="smm-portfolio-item">
            <img src="/assets/smm-planner.png" alt="Content Planner" className="smm-portfolio-img smm-img-wide" />
            <span className="smm-portfolio-label">Weekly Content Planner</span>
          </div>
          <div className="smm-row-bottom">
            <div className="smm-portfolio-item">
              <img src="/assets/smm-calendar.png" alt="Content Calendar" className="smm-portfolio-img smm-img-half" />
              <span className="smm-portfolio-label">Scheduling Calendar</span>
            </div>
            <div className="smm-portfolio-item">
              <img src="/assets/smm-accounts.png" alt="Managed Accounts" className="smm-portfolio-img smm-img-half" />
              <span className="smm-portfolio-label">10+ Managed Accounts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaPage
