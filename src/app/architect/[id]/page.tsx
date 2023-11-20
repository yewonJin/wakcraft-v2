import { Fragment } from "react";

import TierBox from "@/components/common/TierBox";
import Statistics from "@/components/Architect/Statistics";
import Main from "@/components/Architect/DetailPage/Main";
import { getArchitect } from "@/api/server/architect";

export default async function Page({ params }: { params: { id: string } }) {
  const architect = await getArchitect(params.id);

  return (
    <Fragment>
      <div
        key={architect.minecraft_id}
        className="flex w-full flex-wrap items-center justify-between gap-8 rounded-lg xl:flex-nowrap"
      >
        <div className="flex items-center gap-8 md:[&>span:first-child]:flex">
          <TierBox tier={architect.curTier} />
          <div className="flex flex-col gap-3 md:gap-1">
            <p className="text-xl text-text-primary">
              {architect.minecraft_id}
            </p>
            <p className="text-text-secondary">{architect.wakzoo_id}</p>
          </div>
        </div>
        <Statistics noobProHackerInfo={architect.noobProHackerInfo} />
      </div>
      <Main architect={JSON.parse(JSON.stringify(architect))} />
    </Fragment>
  );
}
