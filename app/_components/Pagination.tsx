import React from "react";

export const Pagination = () => (
  <div className="flex justify-between items-center p-4 border-t">
    <span className="text-sm text-gray-500">16개 항목 중 1-8개 항목 표시</span>
    <div className="flex space-x-2">
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        &lt;
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        1
      </button>
      <button className="px-3 py-1 border rounded text-sm bg-blue-50 text-blue-600">
        2
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        3
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        4
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        5
      </button>
      <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
        &gt;
      </button>
    </div>
  </div>
);
