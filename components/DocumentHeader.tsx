import * as React from "react";
import MainNavigation from "./MainNavigation";
import DeathStarIcon from "./icon/DeathStarIcon";

interface OwnProps {
  title: string;
  subTitle?: string;
}

type Props = OwnProps;

const DocumentHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <header className="main-header">
      <div className="content">
        <div className="navigation">
          <MainNavigation />
        </div>

        <div className="sub-header">
          <DeathStarIcon />
          <h1 className="main-heading">
            <span>{title}</span>
          </h1>
          {subTitle && <p>{subTitle}</p>}
        </div>
      </div>

      <style jsx>{`
        .main-header {
          padding: 8px;
        }
        .main-header .content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0;
          justify-content: center;
        }
        .content {
          position: relative;
        }
        .content .profile-image {
          display: block;
          order: 2;
          width: 40px;
          align-self: center;
          margin-left: 0;
          overflow: hidden;
        }
        .content .navigation {
          order: 1;
          flex-basis: 100%;
          width: 100%;
          padding: 8px;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: flex-end;
          z-index: 100;
          border-top: 2px solid transparent;
        }
        .sub-header {
          order: 3;
          margin-left: 16px;
        }
        .sub-header p {
          text-align: center;
          margin: 0;
        }
      `}</style>
    </header>
  );
};

export default DocumentHeader as React.ComponentType<OwnProps>;
