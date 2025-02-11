import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      {process.env.GA_TRACKING_ID && (
        <>
          <Script
            id='ga-tracking-script'
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          ></Script>
          <Script id='ga-tracking-init'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.GA_TRACKING_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default Analytics;
