"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { usePathname } from "next/navigation";

interface NavGroupProps {
  title: string;
  items: {
    href: string;
    title: string;
  }[];
  children?: React.ReactNode;
}

export default function NavGroup({ title, items, children }: NavGroupProps) {
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
          {children}
          <span className="flex-1 mx-2">{title}</span>
          {isPaymentOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
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
