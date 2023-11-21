import { getAllArchitects } from "@/api/server/architect";

import WhoseWork from "@/components/Game/WhoseWork/WhoseWork";

export default async function Page() {
  const architects = await getAllArchitects();

  return (
    <div className="px-4 pb-8 pt-24 xl:px-0 xl:pt-32">
      <WhoseWork architects={JSON.parse(JSON.stringify(architects))} />
    </div>
  );
}
