"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { IconType } from "../Icon";

interface NavItemProps {
  href: string;
  title: string;
  icon?: IconType;
}

export const NavItem: React.FC<NavItemProps> = ({ href, title, icon }) => {
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
      {icon && (
        <Icon type={icon} className="w-5 h-5 stroke-gray-700" strokeWidth={2} />
      )}
      <span className="mx-2">{title}</span>
    </Link>
  );
};
