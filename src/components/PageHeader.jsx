import './PageHeader.css'

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-header-line-group">
        <div className="page-header-line"></div>
        <h1 className="page-header-title">{title}</h1>
        <div className="page-header-line"></div>
      </div>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </div>
  )
}

export default PageHeader
