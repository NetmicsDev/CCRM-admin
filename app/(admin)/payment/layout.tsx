import PageCard from "@/app/_components/page-card";

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageCard>{children}</PageCard>;
}
