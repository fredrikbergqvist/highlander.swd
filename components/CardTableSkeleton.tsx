import { NextFunctionComponent } from "../pages";
import React from "react";

interface OwnProps {
  numberOfRows: number;
}

type Props = OwnProps;
const CardTableSkeleton: NextFunctionComponent<Props> = ({ numberOfRows = 10 }) => {
  const tableRowSkeleton = () => {
    const rows: any[] = [];
    for (let i = 0; i < numberOfRows; i++) {
      rows.push(
        <tr key={i}>
          <td>
            <span>&nbsp;</span>
          </td>
          <td>
            <span className="name">&nbsp;</span>
          </td>
          <td>
            <span>&nbsp;</span>
          </td>
          <td>
            <span>&nbsp;</span>
          </td>
          <style jsx>{`
            .name {
              padding-left: 5px;
              min-width: 250px;
            }
            td {
              overflow: hidden;
              padding: 2px 5px;
            }
            span {
              width: 25px;
              display: inline-block;
              width: 100%;
              height: 100%;
              width: 100%;
              background: linear-gradient(-90deg, #f0f0f0 0%, #cccccc 50%, #f0f0f0 100%);
              background-size: 400% 400%;
              animation: pulse 500ms ease-in-out infinite;
              @keyframes pulse {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: -135% 0%;
                }
              }
            }
          `}</style>
        </tr>
      );
    }
    return rows;
  };

  return <>{tableRowSkeleton()}</>;
};

export default CardTableSkeleton;
