"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const routeNameMap: { [key: string]: string } = {
  dashboard: "대시보드",
  course: "강의 업로드/리스트",
  "service-center": "고객센터",
  notice: "공지사항",
  faq: "FAQ",
  inquiry: "1:1 문의",
  outlink: "청구/약관 링크 관리",
  user: "유저 리스트",
  payment: "결제 관리",
  invoice: "인보이스",
  history: "인보이스 내역",
  info: "결제 정보",
};

export const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm p-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <span>메인</span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                {isLast ? (
                  <span
                    className="font-medium text-gray-700"
                    aria-current="page"
                  >
                    {routeNameMap[name] || name}
                  </span>
                ) : (
                  <Link
                    href={routeTo}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {routeNameMap[name] || name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
