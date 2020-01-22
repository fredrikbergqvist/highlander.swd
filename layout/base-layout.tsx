import * as React from "react";
import DocumentHeader from "../components/document-header";
import dynamic from "next/dynamic";

const SiteFooter = dynamic(() => import("../components/site-footer"));

interface OwnProps {
}

type Props = OwnProps;
const BaseLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <section className="root">
      <DocumentHeader title={"Highlander 40/40 - A Star Wars: Destiny deck building site"}/>

      <main className="main content" itemScope itemType="http://schema.org/WebPage">
        {children}
        <SiteFooter/>
      </main>
      <style jsx>{`
        .root {
          margin: 0 auto;
          min-width: auto;
        }
      `}</style>
    </section>
  );
};

export default BaseLayout as React.ComponentType<OwnProps>;
