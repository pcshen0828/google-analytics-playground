'use client';

import { useReportWebVitals } from 'next/web-vitals';

const WebVitals = () => {
  const currentPath = window.location.pathname;
  console.log('currentPath:', currentPath);

  useReportWebVitals((metric) => {
    console.table(metric);
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics

    if (typeof window.gtag === 'function') {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
        event_label: metric.id, // id unique to current page load
        non_interaction: true, // avoids affecting bounce rate.
        path: currentPath,
        rating: metric.rating,
      });

      console.log('ga event sent: ', metric.name);
    }
  });

  return null;
};

export default WebVitals;
