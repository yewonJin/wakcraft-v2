import Link from "next/link";

import { NoobProHacker } from "@/domains/noobprohacker";
import Card from "../common/Card/Card";
import { getContentLinkUrl } from "@/domains/content";
import { ArchitectureNoobProHacker } from "@/domains/architectureNoobProHacker";

type Props = {
  noobprohackers: NoobProHacker[];
  architectureNoobProHacker: ArchitectureNoobProHacker[];
};

export default function Main(props: Props) {
  const { noobprohackers, architectureNoobProHacker } = props;

  const generateCards = () => {
    const noobprohackerCards = noobprohackers
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
      ));

    const architectureNoobProHackerCards = architectureNoobProHacker
      .sort((a, b) => b.contentInfo.episode - a.contentInfo.episode)
      .map((architectureNoobProHacker) => (
        <Link
          key={architectureNoobProHacker.contentInfo.episode}
          href={getContentLinkUrl(
            "건축 눕프핵",
            architectureNoobProHacker.contentInfo.episode,
          )}
        >
          <Card
            contentType="건축 눕프핵"
            episode={architectureNoobProHacker.contentInfo.episode}
            subject={architectureNoobProHacker.contentInfo.main_subject}
            linesSubject={architectureNoobProHacker.lineInfo.map(
              (item) => item.subject,
            )}
            youtubeUrl={
              architectureNoobProHacker.contentInfo.youtube_url !== "null"
                ? architectureNoobProHacker.contentInfo.youtube_url.split(
                    "/",
                  )[3]
                : "null"
            }
            date={new Date(architectureNoobProHacker.contentInfo.date)}
          />
        </Link>
      ));

    return [...noobprohackerCards, ...architectureNoobProHackerCards].sort(
      (a, b) => b.props.children.props.date - a.props.children.props.date,
    );
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {generateCards()}
    </div>
  );
}
