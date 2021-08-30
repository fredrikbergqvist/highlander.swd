import * as React from "react";
import dynamic from "next/dynamic";

const DocumentHeader = dynamic(() => import("../components/DocumentHeader"));
const SiteFooter = dynamic(() => import("../components/SiteFooter"));

type OwnProps = unknown

type Props = OwnProps;
const BaseLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <>
      <div className="content">
        <DocumentHeader title={"SWDestiny.net"} subTitle="A Star Wars: Destiny deck building site" />
        <main itemScope itemType="http://schema.org/WebPage">
          {children}
        </main>
      </div>
      <SiteFooter />
      <style jsx>{`
        main {
          width: 90%;
          margin: 0 auto;
        }
        .content {
          min-height: calc(100vh - 110px);
        }
      `}</style>
    </>
  );
};

export default BaseLayout as React.ComponentType<OwnProps>;
