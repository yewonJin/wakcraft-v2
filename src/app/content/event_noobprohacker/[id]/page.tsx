import { Fragment } from "react";
import Link from "next/link";

import { medium } from "@/app/layout";
import Carousel from "@/components/Content/EventNoobProHacker/Carousel";
import { getEventNoobProHacker } from "@/api/server/eventNoobProHacker";
import LinkIcon from "../../../../../public/icons/link.svg";

export default async function Page({ params }: { params: { id: string } }) {
  const eventNoobProHacker = await getEventNoobProHacker(parseInt(params.id));

  return (
    <Fragment>
      <div className="mx-auto max-w-[1200px]">
        <div className="mt-4 flex items-end gap-6">
          <h1 className={`text-4xl text-text-primary ${medium.className}`}>
            {eventNoobProHacker.contentInfo.contentName}
          </h1>
          {eventNoobProHacker.contentInfo.youtube_url !== "null" && (
            <Link href={eventNoobProHacker.contentInfo.youtube_url}>
              <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
                <LinkIcon />
              </span>
            </Link>
          )}
        </div>
        <p className="mt-4 text-text-secondary"></p>
      </div>
      <Carousel content={JSON.parse(JSON.stringify(eventNoobProHacker))} />
    </Fragment>
  );
}
