import Header from "@/components/header";

export const metadata = {
  title: "research - jdr",
  description: "Jordan Dominick Rainford's Research Work",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}