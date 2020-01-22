import * as React from "react";

interface OwnProps {
  descriptionText?: string;
  canonicalPath?: string;
  title?: string;
  mainImageUrl?: string;
  keywords?: string;
}

type Props = OwnProps;

export const shortSiteDescription =
  "Web developer with over 22 years of experience. Writing about javascript and front end techniques";

const MetaTags: React.FC<Props> = props => {
  const {
    descriptionText = shortSiteDescription,
    canonicalPath = "",
    title = "Blog by Fredrik Bergqvist",
    mainImageUrl = "https://www.bergqvist.it/profile-512x512.png",
    keywords = ""
  } = props;
  const friendlyUrl = `https://www.bergqvist.it/${canonicalPath}`;
  return (
    <>
      <link rel="canonical" href={friendlyUrl} />
      <meta name="description" content={descriptionText} />
      <meta
        name="keywords"
        content={`${keywords &&
          keywords + ", "}react, redux, javascript, typescript, web development, css, html, angular, web`}
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
