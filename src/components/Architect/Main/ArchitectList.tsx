import Link from "next/link";

import { Architect } from "@/domains/architect";
import { useDebounce } from "@/hooks/useDebounce";
import ArchitectTitle from "../Common/ArchitectTitle";

type Props = {
  architects: ExtendedArchitect[];
  input: string;
};

export default function ArchitectList(props: Props) {
  const { architects, input } = props;

  const debouncedSearchText = useDebounce(input, 60);

  return (
    <div className="mt-4 flex select-none flex-col gap-4">
      {architects.map((architect) => {
        return (
          <Link
            key={architect.minecraft_id}
            href={`/architect/${architect.minecraft_id}`}
          >
            <div className="flex w-full items-center justify-between gap-0 rounded-lg bg-background-secondary px-4 py-4 hover:cursor-pointer hover:bg-background-tertiary">
              <ArchitectTitle
                type="main"
                architect={architect}
                input={input}
                debouncedSearchText={debouncedSearchText}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export interface ExtendedArchitect extends Architect {
  minecraftIdIndexArr: number[];
  wakzooIdIndexArr: number[];
}
