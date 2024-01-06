import Image from "next/image";

type Props = {
  youtubeUrl: string;
};

export default function Thumbnail(props: Props) {
  const { youtubeUrl } = props;

  return (
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
        <div className="bg-background-tertiary"></div>
      )}
    </div>
  );
}
