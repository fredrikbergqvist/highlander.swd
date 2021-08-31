import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

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

          <style jsx global>{`
            * {
              box-sizing: border-box;
            }

            html {
              line-height: 1.15;
              -webkit-text-size-adjust: 100%;
              font-family: Calibri, Helvetica, Arial, sans-serif;
              background-color: #fffffa;
              color: #333;
            }

            body {
              margin: 0;
            }

            main {
              display: block;
            }

            h1 {
              font-size: 2em;
              margin: 0 0 1em;
            }

            h2,
            h3,
            h4 {
              margin: 0 0 1em;
            }

            hr {
              box-sizing: content-box;
              height: 0;
              overflow: visible;
            }

            pre {
              font-family: monospace, monospace;
              font-size: 1em;
            }

            a {
              background-color: transparent;
            }

            abbr[title] {
              border-bottom: none;
              text-decoration: underline;
              text-decoration: underline dotted;
            }

            b,
            strong {
              font-weight: bolder;
            }

            code,
            kbd,
            samp {
              font-family: monospace, monospace;
              font-size: 1em;
            }

            small {
              font-size: 80%;
            }

            sub,
            sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
            }

            sub {
              bottom: -0.25em;
            }

            sup {
              top: -0.5em;
            }

            img {
              border-style: none;
            }

            button,
            input,
            optgroup,
            select,
            textarea {
              font-family: inherit;
              font-size: 100%;
              line-height: 1.15;
              margin: 0;
            }

            button,
            input {
              overflow: visible;
            }

            button,
            select {
              text-transform: none;
            }

            [type="button"],
            [type="reset"],
            [type="submit"],
            button {
              -webkit-appearance: button;
            }

            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner,
            button::-moz-focus-inner {
              border-style: none;
              padding: 0;
            }

            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring,
            button:-moz-focusring {
              outline: 1px dotted ButtonText;
            }

            fieldset {
              border: none;
              padding: 0;
            }

            legend {
              box-sizing: border-box;
              color: inherit;
              display: table;
              max-width: 100%;
              padding: 0;
              white-space: normal;
              margin-bottom: 10px;
            }

            progress {
              vertical-align: baseline;
            }

            textarea {
              overflow: auto;
            }

            [type="checkbox"],
            [type="radio"] {
              box-sizing: border-box;
              padding: 0;
            }

            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
              height: auto;
            }

            [type="search"] {
              -webkit-appearance: textfield;
              outline-offset: -2px;
            }

            [type="search"]::-webkit-search-decoration {
              -webkit-appearance: none;
            }

            ::-webkit-file-upload-button {
              -webkit-appearance: button;
              font: inherit;
            }

            details {
              display: block;
            }

            summary {
              display: list-item;
            }

            template {
              display: none;
            }

            [hidden] {
              display: none;
            }

            ol,
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            html {
              background-color: #f1dda8;
              background-image: url("/Tatooine-bg.svg");
              background-repeat: no-repeat;
              background-position: bottom left;
              background-size: 100%;
            }

            html,
            body,
            #__next {
              min-height: calc(100vh);
            }

            #__next {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
            }

            main {
              background-color: rgba(255, 255, 255, 0.8);
              padding: 10px;
              margin-bottom: 300px;
            }

            img {
              width: 100%;
              height: auto;
            }

            p {
              margin: 0;
            }

            .sr-only {
              border: 0;
              clip: rect(1px, 1px, 1px, 1px);
              -webkit-clip-path: inset(50%);
              clip-path: inset(50%);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
              white-space: nowrap;
            }
          `}</style>
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
