import { Fragment } from "react";

import { medium } from "@/app/layout";
import Carousel from "@/components/Content/EventNoobProHacker/Carousel";
import { getEventNoobProHacker } from "@/api/eventNoobProHacker";

export default async function Page({ params }: { params: { id: string } }) {
  const eventNoobProHacker = await getEventNoobProHacker(parseInt(params.id));

  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <h1 className={`text-4xl text-text-primary ${medium.className}`}>
          {eventNoobProHacker.contentInfo.contentName}
        </h1>
        <p className="mt-4 text-text-secondary"></p>
      </div>
      <Carousel content={JSON.parse(JSON.stringify(eventNoobProHacker))} />
    </Fragment>
  );
}
