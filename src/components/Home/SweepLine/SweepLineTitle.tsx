import { medium } from "@/app/layout";

export default function SweepLineTitle() {
  return (
    <div className="flex items-end gap-4">
      <h3
        className={`${medium.className} text-2xl text-text-primary sm:text-3xl`}
      >
        싹쓸이 라인
      </h3>
      <p className="text-text-secondary">(프로 1등, 해커 1등, 라인 1등)</p>
    </div>
  );
}
