import React from "react";
import BaseLayout from "../layout/BaseLayout";

const HighlanderApp = ({ ...initialProps }: any) => {
  const { Component, pageProps } = initialProps;

  return (
    <BaseLayout>
      <Component {...pageProps} />
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
    </BaseLayout>
  );
};
export default HighlanderApp;
