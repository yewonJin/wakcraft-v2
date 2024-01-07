import CardLinesSubject from "./CardLinesSubject";
import Thumbnail from "../Image/Thumbnail";
import CardTitle from "./CardTitle";
import CardMain from "./CardMain";
import CardContainer from "./CardContainer";
import { ContentType, getContentLinkUrl } from "@/domains/content";

type Props = {
  contentType: ContentType;
  episode: number;
  subject: string;
  linesSubject: string[];
  date: Date;
  youtubeUrl: string;
};

export default function Card(props: Props) {
  const { contentType, episode, subject, linesSubject, date, youtubeUrl } =
    props;

  return (
    <CardContainer>
      <Thumbnail youtubeUrl={youtubeUrl} />
      <CardMain>
        <CardTitle
          contentType={contentType}
          episode={episode}
          subject={subject}
          youtubeUrl={youtubeUrl}
        />
        <CardLinesSubject
          linesSubject={linesSubject}
          link={getContentLinkUrl(contentType, episode)}
        />
        <p className="mt-4 rounded-md text-end text-sm text-text-secondary">
          {date.toISOString().split("T")[0]}
        </p>
      </CardMain>
    </CardContainer>
  );
}
