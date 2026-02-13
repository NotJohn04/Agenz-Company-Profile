const PDF_FILES = {
  dark: '/assets/Agenz-Company-Profile-Dark.pdf',
  light: '/assets/Agenz-Company-Profile-Light.pdf',
}

export function exportPdf(theme) {
  const url = PDF_FILES[theme] || PDF_FILES.dark
  const a = document.createElement('a')
  a.href = url
  a.download = theme === 'light'
    ? 'Agenz - Company Profile (White).pdf'
    : 'Agenz - Company Profile.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
