import Input, { InputProps } from "./input";

interface TextFieldProps extends InputProps {
  label: string;
}

export default function TextField({
  name,
  type = "text",
  label,
  className,
  placeholder,
  ...props
}: TextFieldProps) {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input name={name} type={type} placeholder={placeholder} {...props} />
    </div>
  );
}
