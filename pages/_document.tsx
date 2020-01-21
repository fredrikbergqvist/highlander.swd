import Document, { Head, Html, Main, NextScript } from "next/document";

class HighlanderDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => <App {...props} />
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:site" content="@f_bergqvist" />
          <meta name="twitter:creator" content="@f_bergqvist" />
          <meta name="author" content="Fredrik Bergqvist" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#333" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default HighlanderDocument;
