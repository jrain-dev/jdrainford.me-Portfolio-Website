import Header from "@/components/header";

export const metadata = {
  title: "contact - jdr",
  description: "Jordan Dominick Rainford's Contact Information",
};

export default function ContactLayout({
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