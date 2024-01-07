import Image from "next/image";
import Link from "next/link";

import {
  SweepLine,
  renameToWebp,
  translateLineTiersToKorean,
} from "@/domains/noobprohacker";

type Props = {
  type: "noob" | "pro" | "hacker";
  sweepLine: SweepLine;
};

export default function SweepLineItem(props: Props) {
  const { type, sweepLine } = props;

  return (
    <div
      className="group relative h-[60vw]  max-h-[480px] w-[calc(100vw-32px)] overflow-hidden rounded-2xl md:h-[40vh] md:w-[30vw] [&>img]:rounded-2xl [&>img]:duration-300 hover:[&>img]:scale-105"
      style={{
        boxShadow: "1px 1px 5px #222",
      }}
    >
      <Image
        alt="싹쓸이 라인 이미지"
        sizes="900px"
        style={{ objectFit: "cover" }}
        fill
        src={renameToWebp(sweepLine.line_details[type].image_url)}
      />
      <div className="invisible absolute bottom-2 z-10 flex w-full justify-center text-lg text-[white] hover:cursor-default group-hover:visible">
        <div className="flex w-fit gap-4 rounded-2xl bg-[#121212] px-6 py-2 group-hover:animate-fadeIn">
          <Link
            href={`/architect/${sweepLine.line_details[type].minecraft_id}`}
          >
            <p className="text-[#aaa] hover:cursor-pointer hover:text-[white]">
              {sweepLine.line_details[type].minecraft_id}
            </p>
          </Link>
          <p>{translateLineTiersToKorean(type)}</p>
        </div>
      </div>
    </div>
  );
}
