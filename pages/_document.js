import React from 'react';
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
                    <meta name="author" content="Vizzuality" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <body id="root">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

