import * as React from "react";

interface OwnProps {
  title: string;
  subTitle?: string;
}

type Props = OwnProps;

const DocumentHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <header className="main-header">
      <div className="content">
        <div className="sub-header">
          <h1 className="main-heading">
            <picture className="profile-image">
              <img src="/logo.svg" alt="SwDestiny.net Holocron" width="294" height="55" />
            </picture>
            <span className="sr-only">{title}</span>
          </h1>
          {subTitle && <p className="sr-only">{subTitle}</p>}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        role="presentation"
        className="suns-icon"
        viewBox="0 0 330 280"
      >
        <circle cx="69.5" cy="69.5" fill="#faf3dd" r="67.725" />
        <circle cx="246.5" cy="194.5" fill="#e5b66c" r="83.156" />
      </svg>
      <style jsx>{`
        .profile-image {
          display: block;
          width: 280px;
          align-self: center;
          margin-left: 0;
        }
        .suns-icon {
          position: absolute;
          right: 30px;
          top: 30px;
          width: calc(100vw / 3);
          z-index: -1;
        }
        .main-header {
          padding: 8px;
          width: 90%;
          margin: 0 auto;
        }
        .content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0;
          justify-content: center;
          position: relative;
        }
        .sub-header {
          order: 3;
          margin-left: 16px;
        }
        .sub-header p {
          text-align: center;
          margin: 0;
        }

        @media (min-width: 600px) {
          .profile-image {
            width: 500px;
          }
          .content {
            justify-content: start;
          }
        }
      `}</style>
    </header>
  );
};

export default DocumentHeader as React.ComponentType<OwnProps>;
