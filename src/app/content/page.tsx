import { medium } from "../layout";

import Card from "@/components/common/Card";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        컨텐츠
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        눕프로해커 이외의 마인크래프트 컨텐츠를 볼 수 있다.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <Card
          contentType="이벤트 눕프핵"
          episode={2}
          subject="눕x10 프로x2 해커"
          date={new Date()}
          youtubeUrl="an2ZUKN4giQ"
          linesSubject={[
            "크라켄",
            "고토 히토리",
            "호시노 아이",
            "리치 왕",
            "코바야카와 세나",
          ]}
        />
      </div>
    </div>
  );
}
