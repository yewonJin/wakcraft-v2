import ImageBox from "@/components/common/ImageBox";
import ArchitectureInfo from "./ArchitectureInfo";
import { GuessTime } from "@/domains/guessTime";

type Props = {
  participants: GuessTime["participants"];
};

export default function ParticipantList(props: Props) {
  const { participants } = props;

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2 2xl:w-[1400px] 2xl:grid-cols-3">
      {participants
        .sort((a, b) => a.order - b.order)
        .map((participant) => (
          <div key={participant.minecraft_id} className="relative">
            <ImageBox
              imageUrl={participant.image_url}
              youtubeUrl={participant.youtube_url}
            />
            <ArchitectureInfo
              minecraft_id={participant.minecraft_id}
              expectedTime={participant.expectedTime}
              time={participant.time}
            />
          </div>
        ))}
    </div>
  );
}
