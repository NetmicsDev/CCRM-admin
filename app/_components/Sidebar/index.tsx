import {
  FileSymlink,
  LayoutDashboard,
  LibraryBig,
  MessageCircleWarning,
  Users,
  WalletCards,
} from "lucide-react";
import { NavItem } from "./NavItem";
import Image from "next/image";
import NavGroup from "./NavGroup";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center mb-4 p-2">
        <Image
          src="/images/logo.svg"
          alt="CCRM Logo"
          width={80}
          height={0}
          style={{ height: "auto" }}
        />
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavItem href="/dashboard" title="대시보드">
              <LayoutDashboard />
            </NavItem>
          </li>
          <li>
            <NavItem href="/course" title="강의 업로드/리스트">
              <LibraryBig />
            </NavItem>
          </li>
          <li>
            <NavGroup
              title="고객센터"
              items={[
                {
                  href: "/service-center/notice",
                  title: "공지사항",
                },
                {
                  href: "/service-center/faq",
                  title: "FAQ",
                },
                {
                  href: "/service-center/inquiry",
                  title: "1:1 문의",
                },
              ]}
            >
              <MessageCircleWarning />
            </NavGroup>
          </li>
          <li>
            <NavItem href="/outlink" title="청구/약관 링크 관리">
              <FileSymlink />
            </NavItem>
          </li>
        </ul>
        <p className="ml-2 mt-6 mb-2 text-sm text-gray-500">관리 페이지</p>
        <ul className="space-y-2">
          <li>
            <NavItem href="/user" title="유저 리스트">
              <Users />
            </NavItem>
          </li>
          <li>
            <NavGroup
              title="결제 관리"
              items={[
                {
                  href: "/payment/invoice",
                  title: "인보이스",
                },
                {
                  href: "/payment/history",
                  title: "인보이스 내역",
                },
                {
                  href: "/payment/info",
                  title: "결제 정보",
                },
              ]}
            >
              <WalletCards />
            </NavGroup>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
