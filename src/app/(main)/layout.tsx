import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";

export const metadata: Metadata = {
  title: "Next Social Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-3xl h-screen overflow-none mx-auto p-0 grid grid-rows-[50px_1fr]">
      <Navigation />
      <>{children}</>
    </div>
  );
}
