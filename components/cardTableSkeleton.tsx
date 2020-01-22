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
        <tr>
          <td className="set-info"></td>
          <td className="name"></td>
          <td></td>
          <td></td>
          <td></td>
          <style jsx>{`
            .name {
              padding-left: 5px;
            }

            td {
              border-right: 1px solid #333;
              padding: 2px 5px;
              background-color: #cacaca;
            }
            td:last-child {
              border-right: none;
            }
          `}</style>
        </tr>
      );
    }
    return rows;
  };

  return <div>{tableRowSkeleton()}</div>;
};

export default CardTableSkeleton;
