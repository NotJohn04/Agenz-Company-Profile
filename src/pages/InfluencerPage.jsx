import PageHeader from '../components/PageHeader'
import './InfluencerPage.css'

function InfluencerPage() {
  return (
    <div className="inf-page">
      <PageHeader title="Influencer Marketing" />

      <div className="inf-body">
        {/* Left - info */}
        <div className="inf-info">
          <p className="inf-tagline">Real People, Real Reach</p>
          <p className="inf-desc">
            We connect your brand with the right influencers on Xiaohongshu,
            TikTok, Instagram &amp; more &mdash; driving authentic engagement
            and real results from audiences that trust them.
          </p>

          <div className="inf-price-block">
            <span className="inf-price">RM 799</span>
            <span className="inf-price-unit">/campaign</span>
          </div>

          <ul className="inf-features">
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              Influencer sourcing &amp; matching
            </li>
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              Xiaohongshu, TikTok, IG &amp; more
            </li>
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              End-to-end campaign management
            </li>
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              Content review &amp; quality control
            </li>
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              Performance tracking &amp; ROI reporting
            </li>
            <li className="inf-feature">
              <span className="inf-check">&#10003;</span>
              Network of 50+ Malaysian creators
            </li>
          </ul>
        </div>

        {/* Right - influencer profile screenshots */}
        <div className="inf-portfolio">
          <div className="inf-grid">
            <div className="inf-portfolio-item">
              <div className="inf-img-wrapper">
                <img src="/assets/influencer-sharonyee.jpeg" alt="Sharonyee_18" className="inf-portfolio-img" />
              </div>
              <span className="inf-portfolio-label">Sharonyee &mdash; 28K followers</span>
            </div>
            <div className="inf-portfolio-item">
              <div className="inf-img-wrapper">
                <img src="/assets/influencer-yangyang.jpeg" alt="Yang Yang" className="inf-portfolio-img" />
              </div>
              <span className="inf-portfolio-label">Yang Yang &mdash; 7K followers</span>
            </div>
            <div className="inf-portfolio-item">
              <div className="inf-img-wrapper">
                <img src="/assets/influencer-janet.jpeg" alt="J姐姐 Janet" className="inf-portfolio-img" />
              </div>
              <span className="inf-portfolio-label">J Janet &mdash; 10K followers</span>
            </div>
            <div className="inf-portfolio-item">
              <div className="inf-img-wrapper">
                <img src="/assets/influencer-piggy.jpeg" alt="小猪一只" className="inf-portfolio-img" />
              </div>
              <span className="inf-portfolio-label">Piggy &mdash; 2.3K followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfluencerPage
