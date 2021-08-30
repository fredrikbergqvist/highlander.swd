import Document, { Head, Html, Main, NextScript } from "next/document";

class HighlanderDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
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
          <link rel="preconnect" href="https://res.cloudinary.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:site" content="@f_bergqvist" />
          <meta name="twitter:creator" content="@f_bergqvist" />
          <meta name="author" content="Fredrik Bergqvist" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_57/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_60/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_72/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_76/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_114/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_120/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_144/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_152/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_180/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_192/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_32/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_96/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_16/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://res.cloudinary.com/bergqvist/image/upload/c_scale,w_144/v1580283550/Destiny/tatooine_square_akr59i.png"
          />
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
