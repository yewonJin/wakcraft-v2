"use client";

import { useRouter } from "next/navigation";

type Props = {
  linesSubject: string[];
  link: string;
};

export default function CardLinesSubject(props: Props) {
  const { linesSubject, link } = props;
  const router = useRouter();

  return (
    <div className="mt-4 flex flex-wrap gap-2 text-sm text-text-secondary">
      {linesSubject.map((lineSubject) => (
        <span
          key={lineSubject}
          className="rounded-md bg-background-primary px-2 py-1 duration-300 hover:bg-background-tertiary"
          onClick={(e) => {
            e.preventDefault();
            router.push(`${link}#${lineSubject}`);
          }}
        >
          {`#${lineSubject}`}
        </span>
      ))}
    </div>
  );
}
