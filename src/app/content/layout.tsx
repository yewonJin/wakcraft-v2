export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto pb-8 pt-24 xl:pt-32">
      <title>왁크래프트 | 컨텐츠</title>
      {children}
    </div>
  );
}
