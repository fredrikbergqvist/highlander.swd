import React from "react";
import BaseLayout from "../layout/BaseLayout";
import "../styles/global.css";

const HighlanderApp = ({ ...initialProps }: any) => {
  const { Component, pageProps } = initialProps;

  return (
    <BaseLayout>
      <Component {...pageProps} />
      <style jsx global>{`
      `}</style>
    </BaseLayout>
  );
};
export default HighlanderApp;
