import { medium } from "@/app/layout";
import { tempPlacementTestObject } from "@/temp";
import ParticipantList from "@/components/Content/PlacementTest/ParticipantList";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        {`시즌 ${tempPlacementTestObject.season} 배치고사`}
      </h1>
      <ParticipantList participants={tempPlacementTestObject["participants"]} />
    </div>
  );
}
