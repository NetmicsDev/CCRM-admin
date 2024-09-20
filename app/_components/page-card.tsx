import cn from "../_utils/cn";

export default function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex-1 mx-6 2xl:mx-10 h-full overflow-hidden bg-white rounded-lg p-6 shadow-md",
        "print:mx-0 print:rounded-none "
      )}
    >
      {children}
    </div>
  );
}
