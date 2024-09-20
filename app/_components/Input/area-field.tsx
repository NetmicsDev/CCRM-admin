"use client";

import cn from "@utils/cn";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextAreaField = ({ label, name, className, ...props }: TextAreaProps) => {
  return (
    <div className={"flex flex-col gap-2"}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        {...props}
        className={cn(
          "px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-slate-500",
          "resize-none",
          className
        )}
      />
    </div>
  );
};

export default TextAreaField;
