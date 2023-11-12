export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-24 xl:px-0 xl:pt-32">
      {children}
    </div>
  );
}
