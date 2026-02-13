import PageHeader from '../components/PageHeader'
import './ClientsPage.css'

const clients = [
  { name: 'Amsolar', logo: '/assets/client-amsolar.png' },
  { name: 'K-Structures', logo: '/assets/client-kstructures.png' },
  { name: 'Assign Solar', logo: '/assets/client-assign-solar.png' },
  { name: 'Solar Sunyield', logo: '/assets/client-sunyield.png' },
  { name: 'IJR Venture', logo: '/assets/client-ijr.png' },
  { name: 'Geosav', logo: '/assets/client-geosav.png' },
  { name: 'Elevated Studios', logo: '/assets/client-elevated.png' },
  { name: 'DE Solar', logo: '/assets/client-desolar.png' },
  { name: 'Vantage Steel Works', logo: '/assets/client-vantage.png' },
  { name: 'Solarock', logo: '/assets/client-solarock.png' },
  { name: 'True BioScience', logo: '/assets/client-bioscience.png' },
  { name: 'AD Power', logo: '/assets/client-adpower.png' },
  { name: 'RGS Ray Go Solar', logo: '/assets/client-rgs.png' },
  { name: 'Macglo', logo: '/assets/client-macglo.png' },
  { name: 'Twenty3 Florist', logo: '/assets/client-twentythree.png' },
  { name: 'Redbrand', logo: '/assets/client-redbrand.png' },
]

function ClientsPage() {
  return (
    <div className="clients-page">
      <PageHeader title="Our Clients" subtitle="Trusted by growing businesses across Malaysia" />

      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.name} className="client-card">
            <img src={client.logo} alt={client.name} className="client-logo" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsPage
