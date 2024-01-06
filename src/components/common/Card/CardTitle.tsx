import { ContentType, getContentTitle } from "@/domains/content";
import CardYoutubeLink from "./CardYoutubeLink";

type Props = {
  contentType: ContentType;
  episode: number;
  subject: string;
  youtubeUrl: string;
};

export default function CardTitle(props: Props) {
  const { contentType, episode, subject, youtubeUrl } = props;

  return (
    <div className="flex items-center gap-4  ">
      <h2 className="text-xl text-text-primary">
        {getContentTitle(contentType, subject, episode)}
      </h2>
      <CardYoutubeLink youtubeUrl={youtubeUrl} />
    </div>
  );
}
