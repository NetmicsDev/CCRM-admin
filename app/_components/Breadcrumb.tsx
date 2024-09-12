import React from "react";
import { ChevronRight } from "lucide-react";

export const Breadcrumb = () => (
  <nav className="text-sm p-4 bg-gray-100" aria-label="Breadcrumb">
    <ol className="flex">
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          메인
        </a>
      </li>
      <li className="mx-2">
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          결제관리
        </a>
      </li>
      <li className="mx-2">
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="font-medium text-gray-900" aria-current="page">
        인보이스
      </li>
    </ol>
  </nav>
);
