import { Fragment } from "react";

type Props = {
  isUnlimited?: boolean;
  architectNumber?: number;
};

export default function LeftTop(props: Props) {
  const { isUnlimited, architectNumber } = props;

  return (
    <Fragment>
      {isUnlimited && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
          무제한급
        </div>
      )}
      {architectNumber && architectNumber > 1 && (
        <div className="absolute left-[6px] top-[6px] rounded-lg bg-[#121212] px-[10px] py-1 text-sm text-[white] group-hover/image:visible peer-hover:invisible">
          {architectNumber + "명 작품"}
        </div>
      )}
    </Fragment>
  );
}
