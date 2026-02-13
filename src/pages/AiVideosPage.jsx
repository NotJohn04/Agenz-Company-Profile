import PageHeader from '../components/PageHeader'
import './AiVideosPage.css'

function AiVideosPage() {
  return (
    <div className="aiv-page">
      <PageHeader title="AI Videos" />

      <div className="aiv-body">
        {/* Left - info */}
        <div className="aiv-info">
          <p className="aiv-tagline">Hollywood-Level AI Video Content</p>
          <p className="aiv-desc">
            From hyper-realistic AI UGC creators promoting your products, to breathtaking
            cinematic drone shots and action sequences &mdash; we produce scroll-stopping
            video content that looks like it cost six figures, but didn&rsquo;t.
          </p>

          <div className="aiv-price-block">
            <span className="aiv-price">RM 488</span>
            <span className="aiv-price-unit">/video</span>
          </div>

          <ul className="aiv-features">
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              AI UGC creators &mdash; realistic human presenters for your brand
            </li>
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              Cinematic AI drone shots &amp; aerial sequences
            </li>
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              Hollywood-grade VFX &amp; action cinematics
            </li>
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              Product showcase &amp; lifestyle content
            </li>
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              Optimized for TikTok, Reels &amp; YouTube Shorts
            </li>
            <li className="aiv-feature">
              <span className="aiv-check">&#10003;</span>
              Done-for-you &mdash; zero filming required
            </li>
          </ul>
        </div>

        {/* Right - portfolio showcase */}
        <div className="aiv-portfolio">
          <div className="aiv-row-top">
            <div className="aiv-portfolio-item">
              <img src="/assets/ai-video-ugc1.jpg" alt="AI UGC Creator" className="aiv-portfolio-img" />
              <span className="aiv-portfolio-label">AI UGC Creator</span>
            </div>
            <div className="aiv-portfolio-item">
              <img src="/assets/ai-video-ugc2.jpg" alt="AI UGC Creator" className="aiv-portfolio-img" />
              <span className="aiv-portfolio-label">AI UGC Creator</span>
            </div>
            <div className="aiv-portfolio-item">
              <img src="/assets/ai-video-ugc3.jpg" alt="AI UGC Creator" className="aiv-portfolio-img" />
              <span className="aiv-portfolio-label">AI UGC Creator</span>
            </div>
          </div>
          <div className="aiv-row-bottom">
            <div className="aiv-portfolio-item">
              <img src="/assets/ai-video-drone.jpg" alt="AI Drone Shots" className="aiv-portfolio-img" />
              <span className="aiv-portfolio-label">AI Drone Shots</span>
            </div>
            <div className="aiv-portfolio-item">
              <img src="/assets/ai-video-cinematic.jpg" alt="Cinematic AI Video" className="aiv-portfolio-img" />
              <span className="aiv-portfolio-label">Cinematic AI Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiVideosPage
