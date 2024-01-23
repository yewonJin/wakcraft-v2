import { Fragment } from "react";

type Props = {
  subject: string;
  line_ranking?: number;
  index: number;
};

export default function CarouselInfo(props: Props) {
  const { subject, line_ranking, index } = props;

  return (
    <div className="mx-auto mt-12 flex max-w-[1200px] items-center justify-between px-4 xl:mt-24 xl:px-0">
      <div className="flex justify-between xl:w-[45vw]">
        <h2 id={subject} className="flex scroll-mt-[20vh] items-center gap-3">
          <p className="text-text-secondary">{index + 1 + "라인"}</p>
          <p className="text-xl text-text-primary md:text-2xl">{subject}</p>
          {line_ranking !== undefined && (
            <Fragment>
              <div className="mx-2 h-8 w-[1px] bg-background-tertiary"></div>
              <p className="text-lg text-text-primary md:text-xl">
                {line_ranking + "위"}
              </p>
            </Fragment>
          )}
        </h2>
      </div>
    </div>
  );
}
