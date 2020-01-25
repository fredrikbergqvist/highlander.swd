import * as React from "react";

interface OwnProps {
  descriptionText?: string;
  canonicalPath?: string;
  title?: string;
  mainImageUrl?: string;
  keywords?: string;
}

type Props = OwnProps;

export const shortSiteDescription = "A Star Wars: Destiny deck building site";

const MetaTags: React.FC<Props> = props => {
  const {
    descriptionText = shortSiteDescription,
    canonicalPath = "",
    title = "Star Wars: Destiny net",
    mainImageUrl = "",
    keywords = ""
  } = props;
  const friendlyUrl = `https://www.swdestiny.net/${canonicalPath}`;
  return (
    <>
      <link rel="canonical" href={friendlyUrl} />
      <meta name="description" content={descriptionText} />
      <meta
        name="keywords"
        content={`${keywords &&
        keywords + ", "}Star Wars Destiny, deck builder, Highlander 40/40, Card game, CCG, collectible card game`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={friendlyUrl} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={descriptionText} />
      <meta property="og:image" content={mainImageUrl} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={friendlyUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={descriptionText} />
      {mainImageUrl && <meta property="twitter:image" content={mainImageUrl} />}
    </>
  );
};

export default MetaTags as React.ComponentType<OwnProps>;
