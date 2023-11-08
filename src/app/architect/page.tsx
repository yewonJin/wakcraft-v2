import { medium } from "../layout";
import Main from "@/components/Architect/Main";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-32 xl:px-0">
      <h2 className={`text-3xl text-text-primary ${medium.className}`}>
        건축가
      </h2>
      <p className="mt-4 text-base text-text-secondary">
        마인크래프트 눕프핵 건축가들의 포트폴리오를 볼 수 있다.
      </p>
      <Main />
    </div>
  );
}
