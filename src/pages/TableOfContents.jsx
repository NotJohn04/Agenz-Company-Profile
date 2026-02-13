import { tableOfContents } from '../data/companyData'
import PageHeader from '../components/PageHeader'
import './TableOfContents.css'

function TableOfContents() {
  const half = Math.ceil(tableOfContents.length / 2)
  const leftColumn = tableOfContents.slice(0, half)
  const rightColumn = tableOfContents.slice(half)

  return (
    <div className="toc-page">
      <PageHeader title="Table of Contents" />

      <div className="toc-columns">
        <div className="toc-list">
          {leftColumn.map((item) => (
            <div key={item.number} className="toc-item">
              <span className="toc-number">{item.number}</span>
              <span className="toc-title">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="toc-divider"></div>

        <div className="toc-list">
          {rightColumn.map((item) => (
            <div key={item.number} className="toc-item">
              <span className="toc-number">{item.number}</span>
              <span className="toc-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableOfContents
