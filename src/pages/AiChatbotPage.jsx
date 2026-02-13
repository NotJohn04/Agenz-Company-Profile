import PageHeader from '../components/PageHeader'
import './AiChatbotPage.css'

function AiChatbotPage() {
  return (
    <div className="acb-page">
      <PageHeader title="AI Chatbot" />

      <div className="acb-body">
        {/* Left - info */}
        <div className="acb-info">
          <p className="acb-tagline">Your 24/7 Sales Assistant</p>
          <p className="acb-desc">
            Our AI chatbot replies to customers instantly, reads documents
            using OCR, and even generates quotations automatically &mdash;
            so your team never misses a lead.
          </p>

          <div className="acb-price-block">
            <span className="acb-price">RM 888</span>
            <span className="acb-price-unit">/setup</span>
          </div>

          <ul className="acb-features">
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              Instant AI replies to customer inquiries
            </li>
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              OCR &mdash; reads bills, documents &amp; images
            </li>
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              Auto-generates quotations from extracted data
            </li>
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              Works on WhatsApp, Messenger &amp; more
            </li>
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              Handles multiple conversations at once
            </li>
            <li className="acb-feature">
              <span className="acb-check">&#10003;</span>
              Fully customizable to your business flow
            </li>
          </ul>
        </div>

        {/* Right - 3 screenshots showing the flow */}
        <div className="acb-portfolio">
          <div className="acb-row-top">
            <div className="acb-portfolio-item">
              <div className="acb-img-wrapper">
                <img src="/assets/chatbot-reply.png" alt="AI replying to customer" className="acb-portfolio-img" />
              </div>
              <span className="acb-portfolio-label">AI replies instantly</span>
            </div>
            <div className="acb-portfolio-item">
              <div className="acb-img-wrapper">
                <img src="/assets/chatbot-ocr.png" alt="AI reading document with OCR" className="acb-portfolio-img" />
              </div>
              <span className="acb-portfolio-label">OCR reads uploaded images</span>
            </div>
          </div>
          <div className="acb-row-bottom">
            <div className="acb-portfolio-item">
              <div className="acb-img-wrapper">
                <img src="/assets/chatbot-quote.png" alt="AI generating quotation" className="acb-portfolio-img" />
              </div>
              <span className="acb-portfolio-label">Auto-generates quotations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiChatbotPage
