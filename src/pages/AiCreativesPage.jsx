import PageHeader from '../components/PageHeader'
import './AiCreativesPage.css'

function AiCreativesPage() {
  return (
    <div className="aic-page">
      <PageHeader title="AI Creatives" />

      <div className="aic-body">
        {/* Left - info */}
        <div className="aic-info">
          <p className="aic-tagline">Done-For-You AI Ad Creatives</p>
          <p className="aic-desc">
            We generate high-converting ad posters and creatives for your business &mdash;
            tailored to your brand and your target audience. This is not a DIY tool.
            Our team creates everything and serves it to you red carpet style.
          </p>

          <div className="aic-price-block">
            <span className="aic-price">RM 688</span>
            <span className="aic-price-unit">/batch</span>
          </div>

          <ul className="aic-features">
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              100% done for you &mdash; zero effort on your end
            </li>
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              Custom-designed for your brand identity
            </li>
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              Targeted to your specific audience & industry
            </li>
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              Unlimited variations for A/B testing
            </li>
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              Multi-format export (Meta, Google, TikTok & more)
            </li>
            <li className="aic-feature">
              <span className="aic-check">&#10003;</span>
              Performance prediction before spending
            </li>
          </ul>
        </div>

        {/* Right - portfolio showcase */}
        <div className="aic-portfolio">
          <div className="aic-portfolio-item">
            <img src="/assets/portfolio-solar.png" alt="Solar Sunyield - AI Creatives" className="aic-portfolio-img" />
            <span className="aic-portfolio-label">Solar Sunyield &mdash; CNY Campaign</span>
          </div>
          <div className="aic-portfolio-item">
            <img src="/assets/portfolio-florist.png" alt="TwentyThree Florist - AI Creatives" className="aic-portfolio-img" />
            <span className="aic-portfolio-label">TwentyThree Florist &mdash; Valentine's Day</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiCreativesPage
