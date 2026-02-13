import './ExportButton.css'

function ExportButton({ onClick }) {
  return (
    <button
      className="export-btn"
      onClick={onClick}
      aria-label="Download PDF"
      title="Download PDF"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default ExportButton
