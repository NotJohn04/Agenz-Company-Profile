import PageHeader from '../components/PageHeader'
import './LandingPagesPage.css'

function LandingPagesPage() {
  return (
    <div className="lp-page">
      <PageHeader title="Landing Pages" />

      <div className="lp-body">
        {/* Left - info */}
        <div className="lp-info">
          <p className="lp-tagline">Pages Built To Convert</p>
          <p className="lp-desc">
            We design and develop high-converting landing pages tailored to your
            campaigns &mdash; optimized for lead capture, fast loading, and
            mobile-first experiences.
          </p>


          <ul className="lp-features">
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Custom design &amp; development from scratch
            </li>
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Conversion-optimized layout &amp; copy
            </li>
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Mobile responsive &amp; fast loading
            </li>
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Integrated lead forms &amp; surveys
            </li>
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Built for Meta Ads &amp; Google Ads traffic
            </li>
            <li className="lp-feature">
              <span className="lp-check">&#10003;</span>
              Hosting &amp; domain setup included
            </li>
          </ul>
        </div>

        {/* Right - portfolio showcase */}
        <div className="lp-portfolio">
          <div className="lp-portfolio-stack">
            <div className="lp-portfolio-item">
              <div className="lp-img-wrapper">
                <img src="/assets/landing-amsolar.webp" alt="Amsolar Landing Page" className="lp-portfolio-img" />
              </div>
              <span className="lp-portfolio-label">Amsolar &mdash; Solar Lead Page</span>
            </div>
            <div className="lp-portfolio-item">
              <div className="lp-img-wrapper">
                <img src="/assets/landing-kstructures.webp" alt="K-Structures Landing Page" className="lp-portfolio-img" />
              </div>
              <span className="lp-portfolio-label">K-Structures &mdash; Solar Lead Page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagesPage
