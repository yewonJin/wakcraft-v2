import { medium } from "@/app/layout";
import { getMatchYourTier } from "@/api/matchYourTier";
import ParticipantList from "@/components/Content/MatchYourTier/ParticipantList";

export default async function Page({ params }: { params: { id: string } }) {
  const matchYourTier = await getMatchYourTier(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        {matchYourTier.contentInfo.contentName}
      </h1>
      <ParticipantList
        participants={JSON.parse(JSON.stringify(matchYourTier.participants))}
      />
    </div>
  );
}
