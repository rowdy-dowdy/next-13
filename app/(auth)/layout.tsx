export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="table h-0 min-h-screen w-full">
      <div className="table-cell h-full w-full">{children}</div>
    </div>
  );
}
