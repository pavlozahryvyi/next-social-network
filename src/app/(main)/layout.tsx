import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-3xl h-screen mx-auto p-0 grid grid-rows-[50px_1fr] ">
      <Navigation />
      <main className="p-0 overflow-hidden">{children}</main>
    </div>
  );
}
