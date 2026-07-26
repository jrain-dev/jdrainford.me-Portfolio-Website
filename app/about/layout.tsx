import Header from "@/components/header";

export const metadata = {
  title: "about - jdr",
  description: "Jordan Dominick Rainford's Experience and Credentials",
};

export default function AboutLayout({
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
