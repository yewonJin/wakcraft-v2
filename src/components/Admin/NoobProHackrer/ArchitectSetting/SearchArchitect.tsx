import React from "react";
import { SetterOrUpdater } from "recoil";

import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import Input from "@/components/common/Input";
import { Architect } from "@/domains/architect";
import { NoobProHacker } from "@/domains/noobprohacker";
import { useSearchArchitect } from "@/hooks/Admin/NoobProHacker/useSearchArchitect";

type Props = {
  index: number;
  tier: "noob" | "pro" | "hacker";
  architects: Architect[];
  setLineInfo: SetterOrUpdater<NoobProHacker["lineInfo"]>;
};

function SearchArchitect(props: Props) {
  const {
    input,
    setInput,
    highlightedArchitects,
    handleInputChange,
    handleKeyDown,
  } = useSearchArchitect(props);

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
        handleInputChange={handleInputChange}
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

export default React.memo(SearchArchitect);
