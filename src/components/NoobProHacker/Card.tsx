import Image from "next/image";
import Link from "next/link";

import LinkIcon from "../../../public/icons/link.svg";
import LinesSubject from "./LinesSubject";

type Props = {
  episode: number;
  subject: string;
  linesSubject: string[];
  date: Date;
  youtubeUrl: string;
};

export default function Card(props: Props) {
  const { episode, subject, linesSubject, date, youtubeUrl } = props;

  return (
    <div className="group rounded-xl bg-background-secondary duration-300 hover:-translate-y-2">
      <Link href={`/noobprohacker/${episode}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-background-secondary [&>img]:brightness-[60%] [&>img]:duration-300 group-hover:[&>img]:scale-105 group-hover:[&>img]:filter-none">
          <Image
            fill
            alt="이미지"
            sizes="400px"
            priority
            src={
              youtubeUrl !== "null"
                ? `https://i.ytimg.com/vi/${youtubeUrl}/hq720.jpg`
                : ""
            }
          />
        </div>
        <div className="px-4 pb-4 pt-6">
          <div className="flex items-center gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:rotate-[135deg] [&>svg]:fill-text-tertiary">
            <h2 className="text-xl text-text-primary">{`눕프로해커 ${episode}회 : ${subject}편`}</h2>
            <LinkIcon />
          </div>
          <LinesSubject episode={episode} linesSubject={linesSubject} />
          <p className="rounded-md text-end text-sm text-text-secondary">
            {date.toISOString().split("T")[0]}
          </p>
        </div>
      </Link>
    </div>
  );
}
