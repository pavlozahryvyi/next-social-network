export default function UsersRenderedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Users SSR Page</h1>
      {children}
    </div>
  );
}
