import Header from "@/components/header";

export const metadata = {
  title: "blog - jdr",
  description: "Jordan Dominick Rainford's Blog Posts",
};

export default function BlogLayout({
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