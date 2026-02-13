import PageHeader from '../components/PageHeader'
import './WebDesignPage.css'

function WebDesignPage() {
  return (
    <div className="wd-page">
      <PageHeader title="Website Design & Development" />

      <div className="wd-body">
        {/* Left - info */}
        <div className="wd-info">
          <p className="wd-tagline">Websites That Work For You</p>
          <p className="wd-desc">
            We design and build stunning, high-performance websites from scratch
            &mdash; tailored to your brand, optimized for conversions, and ready
            to scale your business.
          </p>

          <div className="wd-price-block">
            <span className="wd-price">RM 2,676</span>
            <span className="wd-price-unit">/website</span>
          </div>

          <ul className="wd-features">
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              Custom UI/UX design &amp; development
            </li>
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              Mobile responsive &amp; SEO optimized
            </li>
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              Lead capture forms &amp; CRM integration
            </li>
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              Fast loading &amp; modern tech stack
            </li>
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              Domain, hosting &amp; SSL setup included
            </li>
            <li className="wd-feature">
              <span className="wd-check">&#10003;</span>
              30-day post-launch support
            </li>
          </ul>
        </div>

        {/* Right - portfolio 2x2 grid */}
        <div className="wd-portfolio">
          <div className="wd-grid">
            <div className="wd-portfolio-item">
              <div className="wd-img-wrapper">
                <img src="/assets/web-kstructures.png" alt="K-Structures Website" className="wd-portfolio-img" />
              </div>
              <span className="wd-portfolio-label">K-Structures</span>
            </div>
            <div className="wd-portfolio-item">
              <div className="wd-img-wrapper">
                <img src="/assets/web-branding.png" alt="Personal Branding Website" className="wd-portfolio-img" />
              </div>
              <span className="wd-portfolio-label">Personal Branding</span>
            </div>
            <div className="wd-portfolio-item">
              <div className="wd-img-wrapper">
                <img src="/assets/web-fitness.png" alt="Fitness Coach Website" className="wd-portfolio-img" />
              </div>
              <span className="wd-portfolio-label">Fitness Coach</span>
            </div>
            <div className="wd-portfolio-item">
              <div className="wd-img-wrapper">
                <img src="/assets/web-performance.png" alt="Peak Performance Website" className="wd-portfolio-img" />
              </div>
              <span className="wd-portfolio-label">Peak Performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDesignPage
