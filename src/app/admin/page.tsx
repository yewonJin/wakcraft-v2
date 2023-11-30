import Link from "next/link";

import { medium } from "../layout";
import { revalidateArchitects } from "@/api/server/architect";
import { revalidateNoobProHackers } from "@/api/server/noobprohacker";

export default function Page() {
  return (
    <div>
      <div className="flex items-center gap-8">
        <h2 className={`text-3xl ${medium.className} text-text-primary`}>
          어드민 페이지
        </h2>
      </div>
      <ul className="mt-8 flex gap-8 text-xl text-text-secondary [&>li]:rounded-lg [&>li]:bg-background-secondary [&>li]:p-3 [&>li]:px-4 [&>li]:text-center">
        <li>
          <Link href={"/admin/architect"}>건축가</Link>
        </li>
        <li>
          <Link href={"/admin/noobprohacker"}>눕프로해커</Link>
        </li>
        <li>
          <Link href={"/admin/placement_test"}>배치고사</Link>
        </li>
      </ul>
      <h3 className={`mt-16 text-2xl ${medium.className} text-text-primary`}>
        데이터 재검증
      </h3>
      <div className="mt-4 flex gap-8">
        <form action={revalidateArchitects}>
          <button className="rounded-md border-2 border-background-secondary px-3 py-2 text-text-secondary">
            건축가 페이지
          </button>
        </form>
        <form action={revalidateNoobProHackers}>
          <button className="rounded-md border-2 border-background-secondary px-3 py-2 text-text-secondary">
            눕프로해커 페이지
          </button>
        </form>
      </div>
    </div>
  );
}
