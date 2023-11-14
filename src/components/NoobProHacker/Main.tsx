import Card from "../common/Card";

export default function Main() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-8">
      <Card
        contentType="눕프로해커"
        episode={41}
        subject="자유"
        linesSubject={[
          "아카드",
          "짐 캐리",
          "하늘에서 음식이 내린다면",
          "좀비맨",
          "프리렌",
        ]}
        youtubeUrl="Y4bja8kBrg4"
        date={new Date()}
      />
      <Card
        contentType="눕프로해커"
        episode={40}
        subject="자유"
        linesSubject={[
          "스파이더맨",
          "둠",
          "데스해머 쵸로키",
          "나루토",
          "올마이트",
        ]}
        youtubeUrl="SuTYixbxBqI"
        date={new Date()}
      />
    </div>
  );
}
