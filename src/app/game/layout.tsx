export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <title>게임</title>
      {children}
    </div>
  );
}
