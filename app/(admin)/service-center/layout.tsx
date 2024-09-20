import PageCard from "@/app/_components/page-card";

export default function ServiceCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageCard>{children}</PageCard>;
}
