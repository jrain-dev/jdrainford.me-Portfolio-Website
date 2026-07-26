import Header from "@/components/header";

export const metadata = {
  title: "interdisciplinary - jdr",
  description: "Jordan Dominick Rainford's Interdisciplinary Work",
};

export default function InterdisciplinaryLayout({
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