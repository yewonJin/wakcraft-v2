import Link from "next/link";

import { NoobProHacker } from "@/domains/noobprohacker";
import Card from "../common/Card/Card";
import { getContentLinkUrl } from "@/domains/content";

type Props = {
  noobprohackers: NoobProHacker[];
};

export default function Main(props: Props) {
  const { noobprohackers } = props;

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {noobprohackers
        .sort((a, b) => b.contentInfo.episode - a.contentInfo.episode)
        .map((noobprohacker) => (
          <Link
            key={noobprohacker.contentInfo.episode}
            href={getContentLinkUrl(
              "눕프로해커",
              noobprohacker.contentInfo.episode,
            )}
          >
            <Card
              contentType="눕프로해커"
              episode={noobprohacker.contentInfo.episode}
              subject={noobprohacker.contentInfo.main_subject}
              linesSubject={noobprohacker.lineInfo.map((item) => item.subject)}
              youtubeUrl={
                noobprohacker.contentInfo.youtube_url !== "null"
                  ? noobprohacker.contentInfo.youtube_url.split("/")[3]
                  : "null"
              }
              date={new Date(noobprohacker.contentInfo.date)}
            />
          </Link>
        ))}
    </div>
  );
}
