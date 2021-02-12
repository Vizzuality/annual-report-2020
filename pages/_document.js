import React, { Fragment } from 'react';
import Document, {
  Html, Main, NextScript, Head,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="keywords" content="vizzuality annual report 2020 spotlight review future visualization company" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Vizzuality" />
          <meta property="og:title" content="Vizzuality Spotlight 2020"/>
          <meta property="og:description" content="A review of Vizzuality’s work and impact in 2020 and a look at our hopes for the future"/>
          <meta property="og:image" content="http://spotlight2020.vizzuality.com/media.jpg"/>
          <meta property="og:url" content="http://spotlight2020.vizzuality.com/"/>
          <meta name="twitter:title" content="Vizzuality Spotlight 2020"/>
          <meta name="twitter:description" content=" A review of Vizzuality’s work and impact in 2020 and a look at our hopes for the future"/>
          <meta name="twitter:image" content="http://spotlight2020.vizzuality.com/media.jpg"/>
          <meta name="twitter:card" content="vizzuality_spotlight_2020"/>

          <meta
            name="description"
            content={'A review of Vizzuality’s work and impact in 2020 and a look at our hopes for the future'}
          />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@100;400;700&display=swap" rel="stylesheet" />
          <Fragment>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </Fragment>
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

