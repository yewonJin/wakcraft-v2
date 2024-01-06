"use client";

import LinkIcon from "../../../../public/icons/link.svg";

export default function CardYoutubeLink({
  youtubeUrl,
}: {
  youtubeUrl: string;
}) {
  if (youtubeUrl === "null") return;

  return (
    <span
      className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:rotate-[135deg] [&>svg]:fill-text-tertiary [&>svg]:hover:fill-text-primary"
      onClick={(e) => {
        e.preventDefault();
        window.open(`https://youtu.be/${youtubeUrl}`);
      }}
    >
      <LinkIcon />
    </span>
  );
}
