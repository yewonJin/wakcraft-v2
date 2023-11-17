import { Dispatch, Fragment, SetStateAction } from "react";

import { ExtendedArchitect } from "../../Architect/ArchitectList";

type Props = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  highlightedArchitects: ExtendedArchitect[];
};

export default function SearchResult(props: Props) {
  const { input, highlightedArchitects, setInput } = props;

  return (
    <Fragment>
      {input && highlightedArchitects[0]?.wakzoo_id !== input && (
        <div className="border-b-none absolute mx-auto flex max-h-[300px] w-full flex-col overflow-y-scroll border-l-2 border-background-tertiary bg-background-secondary">
          {highlightedArchitects.map((architect) => (
            <div
              key={architect.minecraft_id}
              onClick={() => setInput(architect.wakzoo_id)}
              className="flex  items-center gap-3 border-b-2 border-background-tertiary bg-background-primary pb-2 pl-3 pt-2 hover:cursor-pointer md:gap-2"
            >
              <p className="text-text-primary ">
                {!input || architect.wakzooIdIndexArr.includes(-1)
                  ? architect.wakzoo_id
                  : architect.wakzoo_id
                      .split("")
                      .map((char: string, index: number) => {
                        if (architect.wakzooIdIndexArr.includes(index)) {
                          return (
                            <span key={char + index} className="text-[#d97706]">
                              {char}
                            </span>
                          );
                        }

                        return <span key={char + index}>{char}</span>;
                      })}
              </p>
              <p className="text-sm text-text-secondary">
                {!input || architect.minecraftIdIndexArr.includes(-1)
                  ? architect.minecraft_id
                  : architect.minecraft_id
                      .split("")
                      .map((char: string, index: number) => {
                        if (architect.minecraftIdIndexArr.includes(index)) {
                          return (
                            <span key={char + index} className="text-[#d97706]">
                              {char}
                            </span>
                          );
                        }

                        return <span key={char + index}>{char}</span>;
                      })}
              </p>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}
