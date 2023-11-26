import Link from "next/link";

import { medium } from "../layout";

export default function Page() {
  return (
    <div>
      <h2 className={`text-3xl ${medium.className} text-text-primary`}>
        어드민 페이지
      </h2>
      <ul className="mt-8 flex gap-4 text-xl text-text-secondary [&>li]:bg-background-secondary [&>li]:p-2">
        <li>
          <Link href={"/admin/architect"}> 건축가 추가 및 수정</Link>
        </li>
        <li>눕프핵</li>
      </ul>
    </div>
  );
}
