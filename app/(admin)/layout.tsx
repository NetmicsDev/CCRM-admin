import { Breadcrumb } from "../_components/Breadcrumb";
import { Footer } from "../_components/Footer";
import Sidebar from "../_components/Sidebar";
import cn from "../_utils/cn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen flex-1 overflow-y-auto">
        <Breadcrumb />
        <div
          className={cn(
            "flex-1 mx-6 2xl:mx-10 h-full overflow-hidden bg-white rounded-lg p-6 shadow-md",
            "print:mx-0 print:rounded-none "
          )}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
