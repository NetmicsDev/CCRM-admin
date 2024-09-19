"use client";

import cn from "@utils/cn";
import Icon from "../Icon";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  placeholder?: string;
  options: {
    value: string | number;
    text: string;
  }[];
}

const SelectField = ({
  label,
  options,
  defaultValue,
  className,
  name,
  ...props
}: SelectProps) => {
  const onClickIcon = () => {
    name &&
      (document.getElementById(name) as HTMLSelectElement | null)?.showPicker();
  };
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col relative">
        <select
          id={name}
          name={name}
          defaultValue={defaultValue}
          className={cn(
            "appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-slate-500",
            "disabled:text-gray-700 disabled:bg-gray-200 disabled:border-none",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.text} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <Icon
          type="chevron-down"
          className="w-5 h-5 absolute stroke-gray-500 right-4 top-1/2 -translate-y-1/2"
          onClick={onClickIcon}
        />
      </div>
    </div>
  );
};

export default SelectField;
