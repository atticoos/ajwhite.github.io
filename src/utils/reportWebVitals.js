export function reportWebVitals({ id, name, label, value}) {
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.random(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true
    });
  }
}
