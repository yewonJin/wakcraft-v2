import { medium } from "@/app/layout";
import { getGuessTime } from "@/api/server/guessTime";
import ParticipantList from "@/components/Content/GuessTime/ParticipantList";

export default async function Page({ params }: { params: { id: string } }) {
  const guessTime = await getGuessTime(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        {guessTime.contentInfo.contentName}
      </h1>
      <ParticipantList
        participants={JSON.parse(JSON.stringify(guessTime.participants))}
      />
    </div>
  );
}
