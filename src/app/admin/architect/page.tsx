import AddArchitect from "@/components/Admin/Architect/AddArchitect";
import EditArchitect from "@/components/Admin/Architect/EditArchitect";

export default function Page() {
  return (
    <div className="flex flex-wrap gap-24">
      <AddArchitect />
      <EditArchitect />
    </div>
  );
}
