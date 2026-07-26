import Header from "@/components/header";

export const metadata = {
  title: "projects - jdr",
  description: "Jordan Dominick Rainford's Programmed Works",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
