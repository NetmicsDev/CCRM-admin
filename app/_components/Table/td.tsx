import cn from "@/app/_utils/cn";

export default function Td({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <td className={cn("px-2 py-2 whitespace-nowrap", className)}>{children}</td>
  );
}
