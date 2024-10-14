export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-y-scroll">
      <h1>Users Page</h1>
      <div>{children}</div>
    </div>
  );
}
