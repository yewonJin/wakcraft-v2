import Main from "@/components/NoobProHacker/Main";
import { medium } from "../layout";
import { getAllNoobProHacker } from "@/api/server/noobprohacker";

export default async function Page() {
  const noobprohackers = await getAllNoobProHacker();

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        눕프로해커
      </h1>
      <p className="mt-4 text-base text-text-secondary">
        마인크래프트 눕프로해커 컨텐츠를 볼 수 있다.
      </p>
      <Main noobprohackers={noobprohackers} />
    </div>
  );
}
