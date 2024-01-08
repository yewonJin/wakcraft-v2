import { Fragment } from "react";
import Link from "next/link";

type Props = {
  minecraft_id?: string;
};

export default function LeftBottom(props: Props) {
  const { minecraft_id } = props;

  return (
    <Fragment>
      {minecraft_id && (
        <p
          onClick={(e) => e.stopPropagation()}
          className="peer absolute bottom-4 left-0 bg-[rgba(0,0,0,0.6)] py-1 pl-3 pr-2 text-base text-[white] hover:bg-[rgba(0,0,0,0.8)]"
        >
          <Link href={`/architect/${minecraft_id}`}>{minecraft_id}</Link>
        </p>
      )}
    </Fragment>
  );
}
