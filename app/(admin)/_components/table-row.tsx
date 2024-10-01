"use client";

import { ReactNode } from "react";
import Dropdown, { DropdownOption } from "../../_components/Dropdown";
import Td from "../../_components/Table/td";
import cn from "@/app/_utils/cn";
import Icon from "../../_components/Icon";

export default function TableRow({
  onEdit,
  onDelete,
  dropdownOptions = [],
  className,
  children,
}: {
  onEdit?: () => void;
  onDelete?: () => void;
  dropdownOptions?: DropdownOption[];
  className?: string;
  children: ReactNode;
}) {
  const options: DropdownOption[] = dropdownOptions;

  if (onEdit && !options.some((option) => option.label === "수정")) {
    options.push({
      icon: "square-pen",
      label: "수정",
      onClick: onEdit,
    });
  }

  if (onDelete && !options.some((option) => option.label === "삭제")) {
    options.push({
      icon: "trash",
      label: "삭제",
      onClick: onDelete,
    });
  }

  return (
    <tr className={cn("hover:bg-gray-50", className)}>
      {children}

      <Td className="w-0">
        <Dropdown options={options}>
          <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
            <Icon type="more-vertical" className="h-5 w-5" />
          </button>
        </Dropdown>
      </Td>
    </tr>
  );
}
