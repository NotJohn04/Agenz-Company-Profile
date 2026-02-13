import './NavigationControls.css'

function NavigationControls({ currentPage, totalPages, onPrev, onNext, onGoToPage }) {
  return (
    <div className="nav-controls">
      {/* Previous button */}
      <button
        className="nav-btn nav-btn-prev"
        onClick={onPrev}
        disabled={currentPage === 0}
        aria-label="Previous page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Page dots */}
      <div className="nav-dots">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === currentPage ? 'nav-dot-active' : ''}`}
            onClick={() => onGoToPage(i)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* Next button */}
      <button
        className="nav-btn nav-btn-next"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label="Next page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Page counter */}
      <span className="nav-counter">
        {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
    </div>
  )
}

export default NavigationControls
