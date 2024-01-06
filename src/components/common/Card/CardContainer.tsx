export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group h-min rounded-xl bg-background-secondary duration-300 hover:-translate-y-2">
      {children}
    </div>
  );
}
