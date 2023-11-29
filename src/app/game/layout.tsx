export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto">{children}</div>;
}

export const runtime = "edge";
