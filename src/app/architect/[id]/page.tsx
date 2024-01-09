import { Fragment } from "react";

import ArchitectInfo from "@/components/Architect/Detail/ArchitectInfo";
import { getArchitect } from "@/api/server/architect";
import ArchitectTitle from "@/components/Architect/Common/ArchitectTitle";

export default async function Page({ params }: { params: { id: string } }) {
  const architect = await getArchitect(params.id);

  return (
    <Fragment>
      <title>{"왁크래프트 | " + architect.wakzoo_id}</title>
      <ArchitectTitle
        type="detail"
        architect={JSON.parse(JSON.stringify(architect))}
      />
      <ArchitectInfo architect={JSON.parse(JSON.stringify(architect))} />
    </Fragment>
  );
}
