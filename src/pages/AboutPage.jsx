import { aboutData } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import GradientDivider from '../components/GradientDivider'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader title="About Us" />

      <p className="about-hook">{aboutData.hook}</p>

      <div className="about-body">
        <div className="about-left">
          <p className="about-philosophy">{aboutData.philosophy}</p>

          <GradientDivider />

          <div className="about-mission">
            <span className="about-mission-label">Our Mission</span>
            <p className="about-mission-text">{aboutData.mission}</p>
          </div>
        </div>

        <div className="about-right">
          {aboutData.values.map((value) => (
            <div key={value.title} className="about-value-card">
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutPage
