import Script from 'next/script';
import { FC } from 'react';

type GoogleTagManagerProps = {
  nonce: string;
};

export const GoogleTagManager: FC<GoogleTagManagerProps> = ({ nonce }) => {
  const id = process.env.NEXT_PUBLIC_GTM_ID;

  if (id) {
    return (
      <Script
        nonce={nonce}
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${id}');
      `,
        }}
      />
    );
  }

  return <></>;
};

export const GoogleTagManagerBody: FC = () => (
  <>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PPZFTWD"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);
