import PageHeader from '../components/PageHeader'
import './ClientsPage.css'

const clients = [
  { name: 'Amsolar', logo: '/assets/client-amsolar.webp' },
  { name: 'K-Structures', logo: '/assets/client-kstructures.webp' },
  { name: 'Assign Solar', logo: '/assets/client-assign-solar.webp' },
  { name: 'Solar Sunyield', logo: '/assets/client-sunyield.webp' },
  { name: 'IJR Venture', logo: '/assets/client-ijr.webp' },
  { name: 'Geosav', logo: '/assets/client-geosav.webp' },
  { name: 'Elevated Studios', logo: '/assets/client-elevated.webp' },
  { name: 'DE Solar', logo: '/assets/client-desolar.webp' },
  { name: 'Vantage Steel Works', logo: '/assets/client-vantage.webp' },
  { name: 'Solarock', logo: '/assets/client-solarock.webp' },
  { name: 'True BioScience', logo: '/assets/client-bioscience.webp' },
  { name: 'AD Power', logo: '/assets/client-adpower.webp' },
  { name: 'RGS Ray Go Solar', logo: '/assets/client-rgs.webp' },
  { name: 'Macglo', logo: '/assets/client-macglo.webp' },
  { name: 'Twenty3 Florist', logo: '/assets/client-twentythree.webp' },
  { name: 'Redbrand', logo: '/assets/client-redbrand.webp' },
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
