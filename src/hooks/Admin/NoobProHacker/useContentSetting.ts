import { ChangeEvent, useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { produce } from "immer";

import { getLastestNoobProHacker } from "@/api/client/noobprohacker";
import { NoobProHacker } from "@/domains/noobprohacker";
import { contentInfoState } from "@/store/noobprohacker";

export const useContentSetting = () => {
  const [contentInfo, setContentInfo] = useRecoilState(contentInfoState);

  const { data: lastestEpisode } = useQuery<NoobProHacker[]>(
    ["getLastestNoobProHacker"],
    getLastestNoobProHacker,
  );

  useEffect(() => {
    if (!lastestEpisode) return;

    setContentInfo((prev) => ({
      ...prev,
      episode: lastestEpisode[0].contentInfo.episode + 1,
    }));
  }, [lastestEpisode]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "episode") {
      setContentInfo(
        produce((draft) => {
          draft["episode"] = parseInt(e.target.value);
        }),
      );

      return;
    }

    setContentInfo(
      produce((draft) => {
        draft[e.target.name as "main_subject" | "date" | "youtube_url"] = e
          .target.value as string;
      }),
    );
  };

  return { contentInfo, handleInputChange };
};
