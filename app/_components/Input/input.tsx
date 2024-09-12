"use client";

import cn from "@utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export default function Input({
  id,
  name,
  type = "text",
  error,
  leadingIcon,
  trailingIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            {leadingIcon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          className={cn(
            "appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-slate-500",
            "disabled:text-gray-700 disabled:bg-gray-200 disabled:border-none",
            error && "border-red-500",
            leadingIcon && "pl-10",
            trailingIcon && "pr-10",
            className
          )}
          {...props}
        />
        {trailingIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {trailingIcon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500 ml-4 mt-1">{error}</p>}
    </div>
  );
}
