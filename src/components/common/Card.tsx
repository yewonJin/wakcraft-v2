import Image from "next/image";
import Link from "next/link";

import LinesSubject from "../NoobProHacker/LinesSubject";
import CardYoutubeLink from "./CardYoutubeLink";

type Props = {
  contentType: ContentType;
  episode: number;
  subject: string;
  linesSubject: string[];
  date: Date;
  youtubeUrl: string;
};

export type ContentType =
  | "눕프로해커"
  | "건축 눕프핵"
  | "이벤트 눕프핵"
  | "배치고사"
  | "티어 맞추기"
  | "시간 맞추기"
  | "건축 콘테스트";

export default function Card(props: Props) {
  const { contentType, episode, subject, linesSubject, date, youtubeUrl } =
    props;

  return (
    <div className="group h-min rounded-xl bg-background-secondary duration-300 hover:-translate-y-2">
      <Link href={getLinkUrl(contentType, episode)}>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-background-tertiary [&>img]:brightness-[60%] [&>img]:duration-300 group-hover:[&>img]:scale-105 group-hover:[&>img]:filter-none">
          {youtubeUrl !== "null" ? (
            <Image
              fill
              alt="이미지"
              sizes="400px"
              priority
              src={`https://i.ytimg.com/vi/${youtubeUrl}/hq720.jpg`}
            />
          ) : (
            <div className=" bg-background-tertiary"></div>
          )}
        </div>
        <div className="justify-between px-4 pb-4 pt-6">
          <div className="flex items-center gap-4  ">
            <h2 className="text-xl text-text-primary">
              {getTitle(contentType, subject, episode)}
            </h2>
            <CardYoutubeLink youtubeUrl={youtubeUrl} />
          </div>
          <LinesSubject
            episode={episode}
            linesSubject={linesSubject}
            link={getLinkUrl(contentType, episode)}
          />
          <p className="mt-4 rounded-md text-end text-sm text-text-secondary">
            {date.toISOString().split("T")[0]}
          </p>
        </div>
      </Link>
    </div>
  );
}

const getLinkUrl = (type: ContentType, episode: number) => {
  switch (type) {
    case "눕프로해커":
      return `/noobprohacker/${episode}`;

    case "건축 눕프핵":
      return `/content/architecture_noobprohacker/${episode}`;

    case "이벤트 눕프핵":
      return `/content/event_noobprohacker/${episode}`;

    case "배치고사":
      return `/content/placement_test/${episode}`;

    case "티어 맞추기":
      return `/content/match_your_tier/${episode}`;

    case "건축 콘테스트":
      return `/content/architecture_contest/${episode}`;

    case "시간 맞추기":
      return `/content/guess_time/${episode}`;
  }
};

const getTitle = (type: ContentType, subject: string, episode: number) => {
  switch (type) {
    case "눕프로해커":
      return `눕프로해커 ${episode}회 : ${subject}`;

    case "건축 눕프핵":
      return `건축 눕프로해커 ${episode}회`;

    case "배치고사":
      return `제 ${episode}회 배치고사`;

    case "건축 콘테스트":
      return `건축 콘테스트 : ${subject}`;

    default:
      return `${subject}`;
  }
};
