import { NoobProHacker } from "@/domains/noobprohacker";
import Card from "../common/Card";

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
          <Card
            key={noobprohacker.contentInfo.episode}
            contentType="눕프로해커"
            episode={noobprohacker.contentInfo.episode}
            subject={noobprohacker.contentInfo.main_subject}
            linesSubject={noobprohacker.lineInfo.map((item) => item.subject)}
            youtubeUrl={noobprohacker.contentInfo.youtube_url.split("/")[3]}
            date={new Date(noobprohacker.contentInfo.date)}
          />
        ))}
    </div>
  );
}
