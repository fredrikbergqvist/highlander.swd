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
      <DocumentHeader title={"SWDestiny.net"} subTitle="A Star Wars: Destiny deck building site" />

      <main className="main content" itemScope itemType="http://schema.org/WebPage">
        {children}
      </main>
      <SiteFooter />
      <style jsx>{`
        main {
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default BaseLayout as React.ComponentType<OwnProps>;
