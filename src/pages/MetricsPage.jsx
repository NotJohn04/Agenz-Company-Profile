import { metricsData } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import './MetricsPage.css'

function MetricsPage() {
  return (
    <div className="metrics-page">
      <PageHeader title="Key Results" subtitle="Numbers that speak for themselves" />

      <div className="metrics-grid">
        {metricsData.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
            <span className="metric-desc">{metric.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MetricsPage
