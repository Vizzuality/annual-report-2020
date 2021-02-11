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
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Vizzuality" />
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

