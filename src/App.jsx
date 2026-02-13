import { useState, useEffect, useCallback, useRef } from 'react'
import SlideLayout from './components/SlideLayout'
import NavigationControls from './components/NavigationControls'
import ExportButton from './components/ExportButton'
import CoverPage from './pages/CoverPage'
import TableOfContents from './pages/TableOfContents'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceCategoryPage from './pages/ServiceCategoryPage'
import AiCreativesPage from './pages/AiCreativesPage'
import AiVideosPage from './pages/AiVideosPage'
import ContentCreationPage from './pages/ContentCreationPage'
import SocialMediaPage from './pages/SocialMediaPage'
import DigitalAdvertisingPage from './pages/DigitalAdvertisingPage'
import LandingPagesPage from './pages/LandingPagesPage'
import WebDesignPage from './pages/WebDesignPage'
import CrmPage from './pages/CrmPage'
import AiChatbotPage from './pages/AiChatbotPage'
import InfluencerPage from './pages/InfluencerPage'
import ProcessPage from './pages/ProcessPage'
import MetricsPage from './pages/MetricsPage'
import PricingPage from './pages/PricingPage'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import { otherServices } from './data/companyData'
import { exportPdf } from './utils/exportPdf'
import './App.css'
import './theme-light.css'
import './animations.css'

const PAGES = [
  () => <CoverPage />,
  () => <TableOfContents />,
  () => <AboutPage />,
  () => <ServicesPage />,
  () => <AiCreativesPage />,
  () => <AiVideosPage />,
  () => <ContentCreationPage />,
  () => <SocialMediaPage />,
  () => <DigitalAdvertisingPage />,
  () => <LandingPagesPage />,
  () => <WebDesignPage />,
  () => <CrmPage />,
  () => <AiChatbotPage />,
  () => <InfluencerPage />,
  () => <ServiceCategoryPage title="Other Services" services={otherServices} />,
  () => <ProcessPage />,
  () => <MetricsPage />,
  () => <PricingPage />,
  () => <ClientsPage />,
  () => <ContactPage />,
]

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [theme, setTheme] = useState('dark')
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const touchStartRef = useRef(null)

  // Compute scale factor
  useEffect(() => {
    const updateScale = () => {
      const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080)
      setScale(s)
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      return next
    })
  }, [])

  const goNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToPage = useCallback((page) => {
    setCurrentPage(page)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === '1') {
        document.documentElement.setAttribute('data-theme', 'dark')
        setTheme('dark')
      } else if (e.key === '2') {
        document.documentElement.setAttribute('data-theme', 'light')
        setTheme('light')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Touch swipe handlers
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (!touchStartRef.current) return
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    // Require minimum 50px swipe, and horizontal must dominate vertical
    if (absDx > 50 && absDx > absDy) {
      if (dx < 0) goNext()
      else goPrev()
    }
    touchStartRef.current = null
  }, [goNext, goPrev])

  // Fullscreen toggle — try native API first, fall back to pseudo-fullscreen
  const enterPseudoFullscreen = useCallback(() => {
    document.body.classList.add('ios-fullscreen')
    window.scrollTo(0, 1)
    setIsFullscreen(true)
  }, [])

  const exitPseudoFullscreen = useCallback(() => {
    document.body.classList.remove('ios-fullscreen')
    setIsFullscreen(false)
  }, [])

  const toggleFullscreen = useCallback(async () => {
    if (isFullscreen) {
      // Exit
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        exitPseudoFullscreen()
      }
    } else {
      // Enter — try native first, fall back to pseudo
      if (document.documentElement.requestFullscreen) {
        try {
          await document.documentElement.requestFullscreen()
        } catch {
          enterPseudoFullscreen()
        }
      } else {
        enterPseudoFullscreen()
      }
    }
  }, [isFullscreen, enterPseudoFullscreen, exitPseudoFullscreen])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  // PDF export handler
  const handleExport = useCallback(() => {
    exportPdf(theme)
  }, [theme])

  const CurrentPageComponent = PAGES[currentPage]

  return (
    <div
      className="app-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="scale-wrapper"
        style={{ transform: `scale(${scale})` }}
      >
        <SlideLayout>
          <div key={currentPage} className="page-animate">
            <CurrentPageComponent />
          </div>
        </SlideLayout>
      </div>

      {/* Fullscreen toggle */}
      <button className="fullscreen-toggle" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'} title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
        {isFullscreen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 01-2 2H3M21 8h-3a2 2 0 01-2-2V3M3 16h3a2 2 0 012 2v3M16 21v-3a2 2 0 012-2h3"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3"/>
          </svg>
        )}
      </button>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Back to agenz.my */}
      <a className="home-btn" href="https://agenz.my" aria-label="Back to agenz.my" title="Back to agenz.my">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </a>

      {/* Export button */}
      <ExportButton onClick={handleExport} />

      {/* Navigation controls */}
      <NavigationControls
        currentPage={currentPage}
        totalPages={PAGES.length}
        onPrev={goPrev}
        onNext={goNext}
        onGoToPage={goToPage}
      />
    </div>
  )
}

export default App
