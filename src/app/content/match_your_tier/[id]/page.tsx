import { medium } from "@/app/layout";
import ParticipantList from "@/components/Content/MatchYourTier/ParticipantList";
import { tempMathYourTierObject } from "@/temp";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        티어 맞추기
      </h1>
      <ParticipantList participants={tempMathYourTierObject["participants"]} />
    </div>
  );
}
