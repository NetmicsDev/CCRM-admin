"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  title: string;
  children?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ href, title, children }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  const baseClasses =
    "flex flex-row py-2 px-2 rounded transition-colors duration-200 items-center text-gray-700 ";
  const activeClasses = "bg-blue-50 font-medium";
  const inactiveClasses = "hover:bg-gray-100";

  const classes = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  }`;

  return (
    <Link href={href} className={classes}>
      {children}
      <span className="mx-2">{title}</span>
    </Link>
  );
};
