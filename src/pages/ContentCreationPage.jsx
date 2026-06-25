import PageHeader from '../components/PageHeader'
import './ContentCreationPage.css'

function ContentCreationPage() {
  return (
    <div className="cc-page">
      <PageHeader title="Content Creation" />

      <div className="cc-body">
        {/* Left - info */}
        <div className="cc-info">
          <p className="cc-tagline">Real Content For Real Brands</p>
          <p className="cc-desc">
            From product photography and lifestyle shoots to interviews and
            commercial videography &mdash; we create scroll-stopping content
            that tells your brand story and drives real engagement.
          </p>


          <ul className="cc-features">
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              Professional product photography &amp; styling
            </li>
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              Interview &amp; testimonial video production
            </li>
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              Commercial &amp; industrial shoots
            </li>
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              Social media content packages
            </li>
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              On-location &amp; studio setups
            </li>
            <li className="cc-feature">
              <span className="cc-check">&#10003;</span>
              Full post-production &amp; editing included
            </li>
          </ul>
        </div>

        {/* Right - portfolio showcase */}
        <div className="cc-portfolio">
          <div className="cc-grid">
            <div className="cc-portfolio-item">
              <img src="/assets/content-product.webp" alt="Product Photography" className="cc-portfolio-img" />
              <span className="cc-portfolio-label">Product Photography</span>
            </div>
            <div className="cc-portfolio-item">
              <img src="/assets/content-styling.webp" alt="Product Styling" className="cc-portfolio-img" />
              <span className="cc-portfolio-label">Product Styling</span>
            </div>
            <div className="cc-portfolio-item">
              <img src="/assets/content-interview.webp" alt="Interview Production" className="cc-portfolio-img" />
              <span className="cc-portfolio-label">Interview Production</span>
            </div>
            <div className="cc-portfolio-item">
              <img src="/assets/content-commercial.webp" alt="Commercial Shoot" className="cc-portfolio-img" />
              <span className="cc-portfolio-label">Commercial Shoot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCreationPage
