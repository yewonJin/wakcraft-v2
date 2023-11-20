import { getAllArchitects } from "@/api/server/architect";

import WhoseWork from "@/components/Game/WhoseWork/WhoseWork";

export default async function Page() {
  const architects = await getAllArchitects();

  return <WhoseWork architects={JSON.parse(JSON.stringify(architects))} />;
}
