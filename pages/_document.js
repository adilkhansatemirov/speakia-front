import Document, { Html, Head, Main, NextScript } from 'next/document';

class HTMLDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Speakia"></meta>
          <meta
            name="keywords"
            content="Speakia"
          />
          <link rel="shortcut icon" href="/images/icons/favicon.ico" />
          <link rel="preload" href="/fonts/Jost/Jost-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Jost/Jost-SemiBold.ttf" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HTMLDocument;
