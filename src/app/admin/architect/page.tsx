import AddArchitect from "@/components/Admin/Architect/AddArchitect";
import EditArchitect from "@/components/Admin/Architect/EditArchitect";

export default function Page() {
  return (
    <div className="flex gap-16">
      <div className=" rounded-xl bg-background-secondary p-12">
        <AddArchitect />
      </div>
      <div className=" rounded-xl bg-background-secondary p-12">
        <EditArchitect />
      </div>
    </div>
  );
}
