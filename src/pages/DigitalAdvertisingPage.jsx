import PageHeader from '../components/PageHeader'
import './DigitalAdvertisingPage.css'

function DigitalAdvertisingPage() {
  return (
    <div className="da-page">
      <PageHeader title="Digital Advertising" />

      <div className="da-body">
        {/* Left - info */}
        <div className="da-info">
          <p className="da-tagline">Ads That Actually Convert</p>
          <p className="da-desc">
            We run high-performance Meta Ads campaigns that generate real leads
            at low cost. From strategy to optimization &mdash; we handle
            everything and deliver measurable results.
          </p>

          <div className="da-price-block">
            <span className="da-price">RM 588</span>
            <span className="da-price-unit">/month</span>
          </div>

          <ul className="da-features">
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              Full Meta Ads campaign management
            </li>
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              Lead generation &amp; conversion optimization
            </li>
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              Average cost per lead under RM 12
            </li>
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              700+ leads generated across campaigns
            </li>
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              A/B testing &amp; audience targeting
            </li>
            <li className="da-feature">
              <span className="da-check">&#10003;</span>
              Monthly reporting with full transparency
            </li>
          </ul>
        </div>

        {/* Right - campaign results showcase */}
        <div className="da-portfolio">
          <p className="da-results-title">Real Campaign Results</p>
          <div className="da-results-stack">
            <div className="da-result-item">
              <img src="/assets/ads-ijr-leads.png" alt="IJR Lead Campaign" className="da-result-img" />
              <span className="da-result-label">IJR &mdash; 86 Leads at RM 11.07/lead</span>
            </div>
            <div className="da-result-item">
              <img src="/assets/ads-kstructure-cny.png" alt="K Structure CNY Ads" className="da-result-img" />
              <span className="da-result-label">K Structure CNY &mdash; 117 Leads at RM 7.92/lead</span>
            </div>
            <div className="da-result-item">
              <img src="/assets/ads-sunyield.png" alt="Sunyield Trial Campaign" className="da-result-img" />
              <span className="da-result-label">Sunyield &mdash; 106 Leads at RM 8.73/lead</span>
            </div>
            <div className="da-result-item">
              <img src="/assets/ads-assign-group.png" alt="Assign Group Campaign" className="da-result-img" />
              <span className="da-result-label">Assign Group &mdash; 101 Leads at RM 9.16/lead</span>
            </div>
            <div className="da-result-item">
              <img src="/assets/ads-kstructure-dec.png" alt="K Structure December" className="da-result-img" />
              <span className="da-result-label">K Structure Dec &mdash; 91 Leads at RM 10.18/lead</span>
            </div>
            <div className="da-result-item">
              <img src="/assets/ads-amsolar.png" alt="Amsolar Campaign" className="da-result-img" />
              <span className="da-result-label">Amsolar &mdash; 203 Submissions at RM 11.49/app</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalAdvertisingPage
