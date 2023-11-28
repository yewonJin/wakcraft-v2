import Link from "next/link";

import { medium } from "@/app/layout";
import { getMatchYourTier } from "@/api/server/matchYourTier";
import ParticipantList from "@/components/Content/MatchYourTier/ParticipantList";
import LinkIcon from "../../../../../public/icons/link.svg";

export default async function Page({ params }: { params: { id: string } }) {
  const matchYourTier = await getMatchYourTier(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mt-4 flex items-end gap-6">
        <h1 className={`text-4xl text-text-primary ${medium.className}`}>
          {matchYourTier.contentInfo.contentName}
        </h1>
        {matchYourTier.contentInfo.youtube_url !== "null" && (
          <Link href={matchYourTier.contentInfo.youtube_url}>
            <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
              <LinkIcon />
            </span>
          </Link>
        )}
      </div>
      <ParticipantList
        participants={JSON.parse(JSON.stringify(matchYourTier.participants))}
      />
    </div>
  );
}
