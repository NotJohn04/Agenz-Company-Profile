import './ExportButton.css'

function ExportButton({ onClick, loading }) {
  return (
    <button
      className={`export-btn${loading ? ' export-btn-loading' : ''}`}
      onClick={onClick}
      disabled={loading}
      aria-label={loading ? 'Generating PDF' : 'Download PDF'}
      title={loading ? 'Generating PDF…' : 'Download PDF'}
    >
      {loading ? (
        <svg className="export-spinner" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

export default ExportButton
