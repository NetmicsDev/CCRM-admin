import Sidebar from "../_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="flex h-screen flex-1 overflow-y-auto">{children}</div>
    </>
  );
}
