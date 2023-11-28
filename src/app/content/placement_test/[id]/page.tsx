import Link from "next/link";

import { medium } from "@/app/layout";
import ParticipantList from "@/components/Content/PlacementTest/ParticipantList";
import { getPlacementTest } from "@/api/server/placementTest";
import LinkIcon from "../../../../../public/icons/link.svg";

export default async function Page({ params }: { params: { id: string } }) {
  const placementTest = await getPlacementTest(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mt-4 flex items-end gap-6">
        <h1 className={`text-4xl text-text-primary ${medium.className}`}>
          {`시즌 ${placementTest.season} 배치고사`}
        </h1>
        {placementTest.youtube_url !== "null" && (
          <Link href={placementTest.youtube_url}>
            <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
              <LinkIcon />
            </span>
          </Link>
        )}
      </div>
      <ParticipantList participants={placementTest.participants} />
    </div>
  );
}
