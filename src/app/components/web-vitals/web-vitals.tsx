'use client';

import { useReportWebVitals } from 'next/web-vitals';

const WebVitals = () => {
  useReportWebVitals((metric) => {
    console.table(metric);
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const currentPath = window.location.pathname;

      // window.gtag('event', metric.name, {
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
      //   event_label: metric.id, // id unique to current page load
      //   non_interaction: true, // avoids affecting bounce rate.
      //   path: currentPath,
      //   rating: metric.rating,
      // });

      // ref: https://github.com/GoogleChrome/web-vitals?tab=readme-ov-file#send-the-results-to-google-analytics
      const { name, id, value, delta, rating } = metric;

      window.gtag('event', name, {
        // Built-in params:
        value: delta, // Use `delta` so the value can be summed.
        // Custom params:
        metric_id: id, // Needed to aggregate events.
        metric_value: value, // Optional.
        metric_delta: delta, // Optional.

        // OPTIONAL: any additional params or debug info here.
        // See: https://web.dev/articles/debug-performance-in-the-field
        metric_rating: rating,
        path: currentPath,
        non_interaction: true, // avoids affecting bounce rate.
        // debug_info: '...',
        // ...
      });

      console.log('ga event sent: ', metric.name);
    }
  });

  return null;
};

export default WebVitals;
