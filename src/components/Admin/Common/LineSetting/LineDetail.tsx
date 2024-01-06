import Image from "next/image";
import { useRecoilState } from "recoil";
import { produce } from "immer";

import { renameToWebp } from "@/domains/noobprohacker";
import { lineInfoState } from "@/store/noobprohacker";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";

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
        <FormField label="순위">
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
            width="40px"
            height="36px"
          />
        </FormField>
        <FormField label="개인 유튜브 링크">
          <Input
            name="youtube_url"
            type="text"
            value={lineInfo[index].line_details[tier].youtube_url}
            handleInputChange={(e) =>
              setLineInfo(
                produce((draft) => {
                  draft[index].line_details[tier].youtube_url = e.target.value;
                }),
              )
            }
            height="36px"
          />
        </FormField>
      </div>
    </div>
  );
}
