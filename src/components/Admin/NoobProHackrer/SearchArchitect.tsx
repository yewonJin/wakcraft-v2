import { KeyboardEvent } from "react";
import { produce } from "immer";
import { useRecoilState } from "recoil";

import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import Input from "@/components/common/Input";
import { Architect } from "@/domains/architect";
import useSearch from "@/hooks/useSearch";
import { lineInfoState } from "@/store/noobprohacker";

type Props = {
  index: number;
  tier: "noob" | "pro" | "hacker";
  architects: Architect[];
};

export default function SearchArchitect(props: Props) {
  const { index, tier, architects } = props;
  const [lineInfo, setLineInfo] = useRecoilState(lineInfoState);
  const { input, setInput, highlightedArchitects } = useSearch(architects);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (input === "") return;

    if (e.key === "Tab") {
      setInput(highlightedArchitects[0]?.wakzoo_id);
    }
  };

  return (
    <div
      className={`relative [&>input]:h-[40px] [&>input]:w-full ${
        input === highlightedArchitects[0]?.wakzoo_id ||
        input === highlightedArchitects[0]?.minecraft_id
          ? "[&>input]:bg-background-tertiary"
          : ""
      }`}
    >
      <Input
        type="text"
        name="architect"
        value={input}
        placeholder="검색..."
        handleInputChange={(e) => {
          setInput(e.target.value);

          if (input === "") {
            setLineInfo(
              produce((draft) => {
                draft[index].line_details[tier].minecraft_id = "";
              }),
            );

            return;
          }

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
            return;
          }
        }}
        onKeyDown={handleKeyDown}
      />
      <SearchResult
        input={input}
        setInput={setInput}
        highlightedArchitects={highlightedArchitects}
      />
    </div>
  );
}
