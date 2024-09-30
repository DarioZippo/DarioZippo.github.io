import Script from 'next/script'

const GA_MEASUREMENT_ID = "G-Y4WG9ERRKG";

export function GTag(){
  return(
    <div className="container">
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '{${GA_MEASUREMENT_ID}}');
        `}
      </Script>
    </div>
  )
}