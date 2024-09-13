import React from "react";

interface TableProps {
  columns: { label: string; key: string }[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ columns, data, renderRow }) => {
  const headerStyle =
    "p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
  return (
    <table className="table-auto w-full bg-white border-b">
      <thead className="bg-gray-100 sticky top-0">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={headerStyle}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-sm">
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
