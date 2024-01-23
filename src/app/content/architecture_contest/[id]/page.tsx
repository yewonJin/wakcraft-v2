import { Fragment } from "react";
import Link from "next/link";
import { headers } from "next/headers";

import { medium } from "@/app/layout";
import Carousel from "@/components/Content/ArchitectureContest/Carousel";
import { getArchitectureContest } from "@/api/server/architectureContest";
import LinkIcon from "../../../../../public/icons/link.svg";
import { isMobile } from "@/utils/lib";

export default async function Page({ params }: { params: { id: string } }) {
  const architectureContest = await getArchitectureContest(parseInt(params.id));

  const headersList = headers();
  const userAgent = headersList.get("user-agent") as string;

  return (
    <Fragment>
      <title>{`왁크래프트 | 건축 콘테스트 - ${architectureContest.contentInfo.subject}`}</title>
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <div className="mt-4 flex items-end gap-6">
          <h1
            className={`text-3xl text-text-primary md:text-4xl ${medium.className}`}
          >
            건축 콘테스트
          </h1>
          {architectureContest.contentInfo.youtube_url !== "null" && (
            <Link href={architectureContest.contentInfo.youtube_url}>
              <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
                <LinkIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
      <Carousel
        content={JSON.parse(JSON.stringify(architectureContest))}
        isMobile={isMobile(userAgent)}
      />
    </Fragment>
  );
}
