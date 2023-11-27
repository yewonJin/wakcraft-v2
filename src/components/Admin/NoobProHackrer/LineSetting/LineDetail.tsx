import Image from "next/image";
import { useRecoilState } from "recoil";
import { produce } from "immer";

import { renameToWebp } from "@/domains/noobprohacker";
import Input from "@/components/common/Input";
import { lineInfoState } from "@/store/noobprohacker";

type Props = {
  index: number;
  tier: "noob" | "pro" | "hacker";
};

export default function LineDetail(props: Props) {
  const { index, tier } = props;
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);

  return (
    <div>
      <div className="relative aspect-video">
        <Image
          alt={`${tier} thumbnail`}
          fill
          src={renameToWebp(lineInfo[index].line_details[tier].image_url)}
        />
        <p className="absolute left-2 top-2 z-10 bg-[rgba(0,0,0,0.6)] px-2 text-lg text-text-secondary">
          {lineInfo[index].line_details[tier].minecraft_id}
        </p>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex flex-col gap-2 [&>input]:h-[36px] [&>input]:w-[40px]">
          <p className="text-lg text-text-secondary">순위</p>
          <Input
            name="ranking"
            type="number"
            value={lineInfo[index].line_details[tier].ranking}
            handleInputChange={(e) =>
              setLineInfo(
                produce((draft) => {
                  draft[index].line_details[tier].ranking = parseInt(
                    e.target.value,
                  );
                }),
              )
            }
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:h-[36px] [&>input]:w-full">
          <p className="text-lg text-text-secondary">개인 유튜브 링크</p>
          <Input
            name="youtube_url"
            type="text"
            value={lineInfo[index].line_details[tier].youtube_url}
            handleInputChange={(e) =>
              produce((draft) => {
                draft[index].line_details[tier].youtube_url = e.target.value;
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
