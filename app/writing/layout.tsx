import Header from "@/components/header";

export const metadata = {
  title: "writing - jdr",
  description: "Jordan Dominick Rainford's Written and Programmed Works",
};

export default function WritingLayout({
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
