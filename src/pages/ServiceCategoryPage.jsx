import PageHeader from '../components/PageHeader'
import './ServiceCategoryPage.css'

function ServiceCategoryPage({ title, services }) {
  return (
    <div className="svc-cat-page">
      <PageHeader title={title} />

      <div className={`svc-cat-grid svc-cat-grid-${services.length}`}>
        {services.map((svc) => (
          <div key={svc.title} className="svc-detail-card">
            <div className="svc-detail-header">
              <h3 className="svc-detail-title">{svc.title}</h3>
              <div className="svc-detail-price-row">
                <span className="svc-detail-price">{svc.price}</span>
                {svc.priceUnit && <span className="svc-detail-unit">{svc.priceUnit}</span>}
              </div>
            </div>
            <p className="svc-detail-tagline">{svc.tagline}</p>
            <p className="svc-detail-desc">{svc.description}</p>
            <ul className="svc-detail-features">
              {svc.features.map((f) => (
                <li key={f} className="svc-detail-feature">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="svc-detail-check">
                    <path d="M2.5 7L5.5 10L11.5 3.5" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCategoryPage
