import { medium } from "@/app/layout";

import DescriptionTier from "./DescriptionTier";

type Props = {
  numberOfArchitectsByTier: {
    [key: string]: number;
  };
};

export default function MainInfo(props: Props) {
  const { numberOfArchitectsByTier } = props;

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-32 xl:px-0">
      <h2
        className={`text-3xl text-text-primary sm:text-4xl ${medium.className}`}
      >
        눕프로해커
      </h2>
      <p className="mt-8  text-base text-text-secondary sm:text-lg">
        유튜버 우왁굳의 마인크래프트 치즐 모드 컨텐츠이다.
      </p>
      <p className="mt-3 text-base text-text-secondary sm:text-lg">
        눕, 프로, 해커가 한 라인이 되어 주제를 선정해 작품을 건축하면 우왁굳이
        감상하고 평가한다.
      </p>
      <DescriptionTier numberOfArchitectsByTier={numberOfArchitectsByTier} />
    </div>
  );
}
