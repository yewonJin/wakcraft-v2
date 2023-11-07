"use client";

import Link from "../../public/link.svg";

type Props = {
  youtubeUrl?: string;
};

export default function YoutubeLink(props: Props) {
  const { youtubeUrl } = props;

  if (!youtubeUrl) return;

  return (
    <div
      className="group/youtube peer absolute right-2 top-2 z-10 w-8 rounded-lg bg-[#222] fill-[#fff] p-[2px] text-left opacity-90 hover:cursor-pointer hover:rounded-l-none hover:opacity-100"
      onClick={() => window.open(youtubeUrl)}
    >
      <Link />
      <p className="invisible absolute right-8 top-0 flex h-8 w-max items-center bg-[#222] pb-[1px] pl-[10px] pr-[6px] text-sm text-[#fff] group-hover/youtube:visible group-hover/youtube:rounded-l-lg">
        유튜브로 이동
      </p>
    </div>
  );
}
