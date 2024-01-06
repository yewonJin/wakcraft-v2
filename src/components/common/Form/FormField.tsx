export default function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-text-secondary">{label}</label>
      {children}
    </div>
  );
}
