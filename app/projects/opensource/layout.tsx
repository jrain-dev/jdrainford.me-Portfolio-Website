import Header from "@/components/header";

export const metadata = {
  title: "github - jdr",
  description: "Jordan Dominick Rainford's Open Source Contributions",
};

export default function OpenSourceLayout({
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