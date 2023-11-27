import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import { SetterOrUpdater } from "recoil";
import { produce } from "immer";

import { Architect } from "@/domains/architect";
import { NoobProHacker } from "@/domains/noobprohacker";
import useSearch from "@/hooks/useSearch";

type Props = {
  architects: Architect[];
  setLineInfo: SetterOrUpdater<NoobProHacker["lineInfo"]>;
  index: number;
  tier: "noob" | "pro" | "hacker";
};

export const useArchitectSetting = (props: Props) => {
  const { architects, setLineInfo, index, tier } = props;

  const { input, setInput, highlightedArchitects } = useSearch(architects);

  useEffect(() => {
    if (
      input === highlightedArchitects[0]?.minecraft_id ||
      input === highlightedArchitects[0]?.wakzoo_id
    ) {
      setLineInfo(
        produce((draft) => {
          draft[index].line_details[tier].minecraft_id =
            highlightedArchitects[0]?.minecraft_id;
        }),
      );
    }
  }, [input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (input === "") return;

    if (e.key === "Tab") {
      setInput(highlightedArchitects[0].wakzoo_id);
      setLineInfo(
        produce((draft) => {
          draft[index].line_details[tier].minecraft_id =
            highlightedArchitects[0].minecraft_id;
        }),
      );
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (
      input === highlightedArchitects[0].minecraft_id ||
      input === highlightedArchitects[0].wakzoo_id
    ) {
      setLineInfo(
        produce((draft) => {
          draft[index].line_details[tier].minecraft_id =
            highlightedArchitects[0].minecraft_id;
        }),
      );
      return;
    }
  };

  return {
    input,
    setInput,
    highlightedArchitects,
    handleInputChange,
    handleKeyDown,
  };
};
