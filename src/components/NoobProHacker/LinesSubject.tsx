"use client";

import { useRouter } from "next/navigation";

type Props = {
  episode: number;
  linesSubject: string[];
};

export default function LinesSubject(props: Props) {
  const { episode, linesSubject } = props;
  const router = useRouter();

  return (
    <div className="mt-4 flex flex-wrap gap-3 text-sm text-text-secondary">
      {linesSubject.map((lineSubject) => (
        <span
          key={lineSubject}
          className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/noobprohacker/${episode}#${lineSubject}`);
          }}
        >
          {`#${lineSubject}`}
        </span>
      ))}
    </div>
  );
}
