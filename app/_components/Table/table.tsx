import React from "react";

interface TableProps<T> {
  columns: { label: string; key: string }[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

const Table = <T,>({ columns, data, renderRow }: TableProps<T>) => {
  const headerStyle =
    "px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap ";
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
