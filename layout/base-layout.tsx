import * as React from "react";

interface OwnProps {
}

type Props = OwnProps;
const BaseLayout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <section className="root">
      <main className="main content" itemScope itemType="http://schema.org/WebPage">
        {children}
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
