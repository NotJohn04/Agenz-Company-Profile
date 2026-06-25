import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const W = 1920
const H = 1080

// Make sure every image inside the export root is fully decoded before we
// rasterize the slides — otherwise html2canvas captures blank gaps.
async function waitForImages(root) {
  const imgs = Array.from(root.querySelectorAll('img'))
  await Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth) return Promise.resolve()
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', resolve, { once: true })
      })
    })
  )
}

/**
 * Generate the company-profile PDF on demand from the live slides.
 * `root` is an offscreen container holding one `.pdf-slide` (1920×1080) per page.
 */
export async function exportPdf(root) {
  if (!root) return
  const slides = root.querySelectorAll('.pdf-slide')
  if (!slides.length) return

  await waitForImages(root)
  // give webfonts (Anton / Instrument Serif / Geist / JetBrains Mono) a beat
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready } catch { /* ignore */ }
  }

  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H], compress: true })

  for (let i = 0; i < slides.length; i++) {
    const canvas = await html2canvas(slides[i], {
      width: W,
      height: H,
      scale: 1.5,
      backgroundColor: '#F4F1EB',
      useCORS: true,
      logging: false,
    })
    const img = canvas.toDataURL('image/jpeg', 0.9)
    if (i > 0) pdf.addPage([W, H], 'landscape')
    pdf.addImage(img, 'JPEG', 0, 0, W, H)
  }

  pdf.save('Agenz - Company Profile.pdf')
}
