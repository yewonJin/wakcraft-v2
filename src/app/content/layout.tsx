export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-4 pb-8 pt-24 xl:px-0 xl:pt-32">
      <title>컨텐츠</title>
      {children}
    </div>
  );
}
