import { PlacementTest } from "@/domains/placementTest";
import ImageBox from "../common/ImageBox";
import ArchitectureInfo from "./ArchitectureInfo";

type Props = {
  participants: PlacementTest["participants"];
};

export default function ParticipantList(props: Props) {
  const { participants } = props;

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2 2xl:w-[1400px] 2xl:grid-cols-3">
      {participants.map((participant) => (
        <div key={participant.minecraft_id} className="relative">
          <ImageBox imageUrl={participant.image_url} />
          <ArchitectureInfo
            minecraft_id={participant.minecraft_id}
            placementResult={participant.placement_result}
          />
        </div>
      ))}
    </div>
  );
}
