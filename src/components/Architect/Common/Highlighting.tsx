import { ExtendedArchitect } from "../Main/ArchitectList";

type Props = {
  architect: ExtendedArchitect;
  input: string;
};

export default function Highlighting(props: Props) {
  const { architect, input } = props;

  return (
    <div className="flex flex-col gap-3 md:gap-1">
      <p className="text-text-primary md:text-xl">
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
      <p className="text-sm text-text-secondary md:text-base">
        {!input || architect.wakzooIdIndexArr.includes(-1)
          ? architect.wakzoo_id
          : architect.wakzoo_id.split("").map((char: string, index: number) => {
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
    </div>
  );
}
