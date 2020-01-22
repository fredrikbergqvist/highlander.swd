import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={`navigation`}>
      <ul className={`list `}>
        <li className="listItem">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navigation {
          display: flex;
          justify-content: flex-end;
          padding: 0;
          width: 100%;
        }
        .icon {
          fill: currentColor;
          width: 24px;
          height: 24px;
          display: inline-block;
          fontsize: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          user-select: none;
          flex-shrink: 0;
          display: block;
          margin: 0 auto;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          width: 100%;
        }

        .listItem {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-right: 0px;
          text-align: center;
        }
        .listItem:last-child {
          margin-right: 0;
        }

        .link {
          padding: 4px 16px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
