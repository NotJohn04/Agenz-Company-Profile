import { serviceCategories } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import './ServicesPage.css'

function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader title="Our Services" subtitle="AI-powered solutions for modern business" />

      <div className="services-categories">
        {serviceCategories.map((cat) => (
          <div key={cat.title} className="services-cat-card">
            <span className="services-cat-icon">{cat.icon}</span>
            <h3 className="services-cat-title">{cat.title}</h3>
            <ul className="services-cat-list">
              {cat.services.map((s) => (
                <li key={s} className="services-cat-item">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="services-note">13+ services across 4 categories {"\u2014"} detailed in the following pages</p>
    </div>
  )
}

export default ServicesPage
