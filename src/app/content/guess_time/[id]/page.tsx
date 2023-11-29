import Link from "next/link";

import { medium } from "@/app/layout";
import { getGuessTime } from "@/api/server/guessTime";
import ParticipantList from "@/components/Content/GuessTime/ParticipantList";
import LinkIcon from "../../../../../public/icons/link.svg";

export default async function Page({ params }: { params: { id: string } }) {
  const guessTime = await getGuessTime(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mt-4 flex items-end gap-6">
        <h1
          className={`text-3xl text-text-primary xl:text-4xl ${medium.className}`}
        >
          {guessTime.contentInfo.contentName}
        </h1>
        {guessTime.contentInfo.youtube_url !== "null" && (
          <Link href={guessTime.contentInfo.youtube_url}>
            <span className="[&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-primary">
              <LinkIcon />
            </span>
          </Link>
        )}
      </div>
      <ParticipantList
        participants={JSON.parse(JSON.stringify(guessTime.participants))}
      />
    </div>
  );
}
