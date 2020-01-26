import * as React from "react";
import DocumentHeader from "../components/DocumentHeader";
import dynamic from "next/dynamic";

const SiteFooter = dynamic(() => import("../components/SiteFooter"));

interface OwnProps {
}

type Props = OwnProps;
const BaseLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <>
      <DocumentHeader title={"Star Wars: Destiny net"} subTitle="A Highlander 40/40 deck building site" />

      <main className="main content" itemScope itemType="http://schema.org/WebPage">
        {children}
      </main>
      <SiteFooter />
      <style jsx>{`
        .root {
          margin: 0 auto;
          min-width: auto;
        }
        main {
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default BaseLayout as React.ComponentType<OwnProps>;
