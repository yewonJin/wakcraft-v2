export type ContentType =
  | "눕프로해커"
  | "건축 눕프핵"
  | "이벤트 눕프핵"
  | "배치고사"
  | "티어 맞추기"
  | "시간 맞추기"
  | "건축 콘테스트";

export const getContentLinkUrl = (type: ContentType, episode: number) => {
  switch (type) {
    case "눕프로해커":
      return `/noobprohacker/${episode}`;

    case "건축 눕프핵":
      return `/content/architecture_noobprohacker/${episode}`;

    case "이벤트 눕프핵":
      return `/content/event_noobprohacker/${episode}`;

    case "배치고사":
      return `/content/placement_test/${episode}`;

    case "티어 맞추기":
      return `/content/match_your_tier/${episode}`;

    case "건축 콘테스트":
      return `/content/architecture_contest/${episode}`;

    case "시간 맞추기":
      return `/content/guess_time/${episode}`;
  }
};

export const getContentTitle = (
  type: ContentType,
  subject: string,
  episode: number,
) => {
  switch (type) {
    case "눕프로해커":
      return `눕프로해커 ${episode}회 : ${subject}`;

    case "건축 눕프핵":
      return `건축 눕프로해커 ${episode}회`;

    case "배치고사":
      return `제 ${episode}회 배치고사`;

    case "건축 콘테스트":
      return `건축 콘테스트 : ${subject}`;

    default:
      return `${subject}`;
  }
};
