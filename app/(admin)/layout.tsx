import { Breadcrumb } from "../_components/Breadcrumb";
import { Footer } from "../_components/Footer";
import Sidebar from "../_components/Sidebar";

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
        <div className="flex-1 px-6 2xl:px-10">{children}</div>
        <Footer />
      </div>
    </>
  );
}
