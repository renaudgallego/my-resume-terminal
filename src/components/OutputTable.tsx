import React from "react";

interface OutputTableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export const OutputTable: React.FC<OutputTableProps> = ({ headers, rows }) => {
  return (
    <table className="output-table">
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
