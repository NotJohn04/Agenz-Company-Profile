import './PageHeader.css'

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-mark"></div>
      <h1 className="page-header-title">{title}</h1>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </div>
  )
}

export default PageHeader
