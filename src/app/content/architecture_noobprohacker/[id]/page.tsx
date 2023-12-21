import { Fragment } from "react";
import Link from "next/link";

import { medium } from "@/app/layout";
import LinkIcon from "../../../../../public/icons/link.svg";
import { getArchitectureNoobProHacker } from "@/api/server/architectureNoobProHacker";
import Carousel from "@/components/NoobProHacker/Carousel";

export default async function Page({ params }: { params: { id: string } }) {
  const architectureNoobProHacker = await getArchitectureNoobProHacker(
    parseInt(params.id),
  );

  return (
    <Fragment>
      <title>{`왁크래프트 | 건축 눕프핵 ${architectureNoobProHacker.contentInfo.episode}회`}</title>
      <div className="mx-auto max-w-[1200px]">
        <div className="mt-4 flex items-end gap-6">
          <h1
            className={`text-3xl text-text-primary md:text-4xl ${medium.className}`}
          >
            건축 눕프로해커
          </h1>
          {architectureNoobProHacker.contentInfo.youtube_url !== "null" && (
            <Link href={architectureNoobProHacker.contentInfo.youtube_url}>
              <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
                <LinkIcon />
              </span>
            </Link>
          )}
        </div>
        <p className="mt-4 text-text-secondary"></p>
      </div>
      <Carousel
        noobprohacker={JSON.parse(JSON.stringify(architectureNoobProHacker))}
      />
    </Fragment>
  );
}
