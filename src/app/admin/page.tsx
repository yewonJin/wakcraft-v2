import Link from "next/link";

import { medium } from "../layout";

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
    </div>
  );
}
