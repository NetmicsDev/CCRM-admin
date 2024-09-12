"use client";

import { useState } from "react";
import { NavItem } from "./NavItem";
import { usePathname } from "next/navigation";
import Icon, { IconType } from "../Icon";

interface NavGroupProps {
  title: string;
  icon?: IconType;
  items: {
    href: string;
    title: string;
  }[];
  children?: React.ReactNode;
}

export default function NavGroup({ title, items, icon }: NavGroupProps) {
  const pathname = usePathname();
  const isActive = items.some(({ href }) => pathname.startsWith(href));
  const [isPaymentOpen, setIsPaymentOpen] = useState(isActive);

  return (
    <>
      <div className="block py-2 px-2 text-gray-700 hover:bg-gray-100">
        <button
          onClick={() => setIsPaymentOpen(!isPaymentOpen)}
          className="flex items-center w-full text-left focus:outline-none"
        >
          {icon && (
            <Icon
              type={icon}
              className="w-5 h-5 stroke-gray-700"
              strokeWidth={2}
            />
          )}
          <span className="flex-1 mx-2">{title}</span>
          {isPaymentOpen ? (
            <Icon type="chevron-up" className="h-4 w-4" />
          ) : (
            <Icon type="chevron-down" className="h-4 w-4" />
          )}
        </button>
      </div>
      {isPaymentOpen && (
        <ul className="pl-4 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <NavItem href={item.href} title={item.title} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
