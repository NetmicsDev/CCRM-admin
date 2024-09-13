"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import Icon, { IconType } from "./Icon";
import cn from "../_utils/cn";

interface DropdownOption {
  label: string;
  icon?: IconType;
  color?: string; // Icon component to display (optional)
  onClick?: () => void; // Function to call when the option is clicked
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-left" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex cursor-pointer rounded hover:bg-gray-200"
      >
        {children}
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 max-w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className={cn(
                  "group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full",
                  option.color && `text-${option.color}`
                )}
                onClick={() => {
                  option.onClick?.();
                  setIsOpen(false); // Close dropdown after click
                }}
              >
                {option.icon && (
                  <Icon
                    type={option.icon}
                    className={cn(
                      "w-4 h-4 mr-3 text-gray-700 group-hover:bg-gray-100",
                      option.color && `text-${option.color}`
                    )}
                  />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
