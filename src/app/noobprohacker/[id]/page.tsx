import { Fragment } from "react";

import { medium } from "@/app/layout";
import Carousel from "@/components/NoobProHacker/Carousel";
import { getNoobProHacker } from "@/api/server/noobprohacker";

export default async function Page({ params }: { params: { id: string } }) {
  const noobprohacker = await getNoobProHacker(parseInt(params.id));

  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl text-text-secondary">
          제 {noobprohacker.contentInfo.episode}회
        </h2>
        <h1 className={`mt-4 text-4xl text-text-primary ${medium.className}`}>
          {"눕프로해커 : " + noobprohacker.contentInfo.main_subject + "편"}
        </h1>
      </div>
      <Carousel noobprohacker={JSON.parse(JSON.stringify(noobprohacker))} />
    </Fragment>
  );
}
