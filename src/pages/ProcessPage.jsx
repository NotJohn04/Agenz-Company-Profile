import { processSteps } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import './ProcessPage.css'

function ProcessPage() {
  return (
    <div className="process-page">
      <PageHeader title="How We Work" subtitle="Our proven 4-step process" />

      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div key={step.step} className="process-step">
            <div className="process-step-number">{step.step}</div>
            <div className="process-step-icon">{step.icon}</div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.description}</p>
            {index < processSteps.length - 1 && (
              <div className="process-connector">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                  <path d="M0 10 H50 L45 5 M50 10 L45 15" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessPage
