import Image from "next/image";
import Link from "next/link";

import {
  NoobProHacker,
  renameTo1080Webp,
  renameToWebp,
  translateLineTiersToKorean,
} from "@/domains/noobprohacker";

type Props = {
  line: NoobProHacker["lineInfo"][0];
  initInterval: () => void;
  startInterval: () => void;
};

export default function MainImageItem(props: Props) {
  const { line, initInterval, startInterval } = props;

  return (
    <div className="flex w-full flex-col justify-center gap-6 md:flex-row md:gap-8">
      {lineTiers.map((lineTier) => {
        return (
          <div
            onMouseOver={() => {
              initInterval();
            }}
            onMouseOut={() => {
              startInterval();
            }}
            onClick={() =>
              window.open(
                renameTo1080Webp(line.line_details[lineTier].image_url),
              )
            }
            key={line.line_details[lineTier].minecraft_id}
            className="group relative h-[60vw] max-h-[480px] w-[calc(100vw-32px)] overflow-hidden hover:cursor-pointer md:h-[45vh] md:w-[30vw] [&>img]:duration-[500ms] [&>img]:hover:scale-105"
          >
            <Image
              alt="작품 이미지"
              priority
              sizes="800px"
              style={{ objectFit: "cover" }}
              fill
              src={renameToWebp(line.line_details[lineTier].image_url)}
            />
            <div
              onClick={(e) => e.stopPropagation()}
              className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible"
            >
              <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
                <Link
                  href={`/architect/${line.line_details[lineTier].minecraft_id}`}
                >
                  <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
                    {line.line_details[lineTier].minecraft_id}
                  </p>
                </Link>
                <p>{translateLineTiersToKorean(lineTier)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const lineTiers = ["noob", "pro", "hacker"] as ("noob" | "pro" | "hacker")[];
