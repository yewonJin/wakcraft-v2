import { Fragment } from "react";
import Link from "next/link";
import { headers } from "next/headers";

import { medium } from "@/app/layout";
import LinkIcon from "../../../../../public/icons/link.svg";
import { getArchitectureNoobProHacker } from "@/api/server/architectureNoobProHacker";
import Carousel from "@/components/NoobProHacker/Carousel";
import { isMobile } from "@/utils/lib";

export default async function Page({ params }: { params: { id: string } }) {
  const architectureNoobProHacker = await getArchitectureNoobProHacker(
    parseInt(params.id),
  );

  const headersList = headers();
  const userAgent = headersList.get("user-agent") as string;

  return (
    <Fragment>
      <title>{`왁크래프트 | 건축 눕프핵 ${architectureNoobProHacker.contentInfo.episode}회`}</title>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="px-4 text-xl text-text-secondary md:text-2xl xl:px-0">
          제 {architectureNoobProHacker.contentInfo.episode}회
        </h2>
        <div className="mt-4 flex items-end gap-6 px-4 xl:px-0">
          <h1
            className={`text-2xl text-text-primary md:text-4xl ${medium.className}`}
          >
            {"건축 눕프로해커"}
          </h1>
          {architectureNoobProHacker.contentInfo.youtube_url !== "null" && (
            <Link href={architectureNoobProHacker.contentInfo.youtube_url}>
              <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
                <LinkIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
      <Carousel
        isMobile={isMobile(userAgent)}
        noobprohacker={JSON.parse(JSON.stringify(architectureNoobProHacker))}
      />
    </Fragment>
  );
}
