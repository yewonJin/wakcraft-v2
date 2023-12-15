import Link from "next/link";

import {
  Schedule,
  getContentName,
  getContentTitle,
  getEpisode,
  getURL,
  isEventNoobProHacker,
  isPostedContent,
} from "@/domains/schedule";
import Add from "../../../../public/icons/add.svg";
import LinkIcon from "../../../../public/icons/link.svg";

type Props = {
  curMonth: number;
  index: number;
  startDate: number;
  item: Schedule;
  isToday: boolean;
};

export default function ContentBlock(props: Props) {
  const { curMonth, index, startDate, item, isToday } = props;

  return (
    <div
      className={`${
        getBackgroundColor[item.content]
      } relative flex h-[130px] flex-col border-text-secondary p-3 text-[#eee] duration-300 [&>li:marker]:mr-0 `}
      key={curMonth + index}
      style={{ border: isToday ? "1px solid" : "" }}
    >
      <p className="text-lg">{index + 1 - startDate}</p>
      {isPostedContent(item) && (
        <Link href={getURL(item)}>
          <span className="absolute bottom-2 right-2 z-10 rounded-full bg-background-primary p-1 hover:cursor-pointer [&>svg]:rotate-90 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-secondary">
            <Add />
          </span>
        </Link>
      )}
      {!isPostedContent(item) && item.youtube_link && (
        <Link href={item.youtube_link}>
          <span className="absolute bottom-2 right-2 z-10 rounded-full bg-background-primary p-1 hover:cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-secondary">
            <LinkIcon />
          </span>
        </Link>
      )}
      {item.isTributeContent && (
        <span className="absolute right-3 top-4 text-sm">조공 컨텐츠</span>
      )}
      {isEventNoobProHacker(item) && (
        <span className="absolute right-3 top-4 text-sm">예능 눕프핵</span>
      )}
      <div key={curMonth + index} className="mt-1">
        <div
          className={`${
            item.title === "해커의 손길" ? "flex-col-reverse" : ""
          } flex flex-wrap gap-1`}
        >
          {getContentName(item) && <p className="">{getContentName(item)}</p>}
          {getEpisode(item) && <p className="mb-[1px]">{getEpisode(item)}</p>}
          {getContentTitle(item) && (
            <p className="w-full">{getContentTitle(item)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

const getBackgroundColor: { [key: string]: string } = {
  눕프로해커: "bg-color-green",
  "건축 눕프핵": "bg-color-green",
  "건축 콘테스트": "bg-color-blue",
  "배틀 건축 콘테스트": "bg-color-blue",
  배치고사: "bg-color-yellow",
  "이벤트 눕프핵": "bg-color-rose",
  "시간 맞추기": "bg-color-rose",
  "티어 맞추기": "bg-color-rose",
  "진짜 눕프핵 마을": "bg-color-neutral",
  "눕프핵 마을": "bg-color-neutral",
  "고멤 마을": "bg-color-neutral",
  "그 외": "bg-color-neutral",
};
