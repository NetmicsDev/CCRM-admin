import PageCard from "@/app/_components/page-card";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageCard>{children}</PageCard>;
}
