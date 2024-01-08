import Link from "next/link";

import { medium } from "../layout";
import { revalidateArchitects } from "@/api/server/architect";
import { revalidateNoobProHackers } from "@/api/server/noobprohacker";
import { revalidateContentPage, revalidateMainPage } from "@/api/server/action";
import Button from "@/components/common/Button/Button";
import PageTitle from "@/components/common/PageTitle";

export default function Page() {
  return (
    <div>
      <PageTitle title="어드민 페이지" content="" />
      <div className="mt-8  flex flex-wrap gap-6 text-lg text-text-secondary">
        <Link href={"/admin/architect"}>
          <Button value="건축가" />
        </Link>
        <Link href={"/admin/noobprohacker"}>
          <Button value="눕프로해커" />
        </Link>
        <Link href={"/admin/architecture_noobprohacker"}>
          <Button value="건축 눕프핵" />
        </Link>
        <Link href={"/admin/placement_test"}>
          <Button value="배치고사" />
        </Link>
        <Link href={"/admin/schedule"}>
          <Button value="스케쥴" />
        </Link>
      </div>
      <h2 className={`mt-16 text-2xl ${medium.className} text-text-primary`}>
        데이터 재검증
      </h2>
      <div className="mt-4 flex gap-4">
        <form action={revalidateArchitects}>
          <Button value="건축가 페이지" />
        </form>
        <form action={revalidateNoobProHackers}>
          <Button value="눕프로해커 페이지" />
        </form>
        <form action={revalidateMainPage}>
          <Button value="메인 페이지" />
        </form>
        <form action={revalidateContentPage}>
          <Button value="컨텐츠 페이지" />
        </form>
      </div>
    </div>
  );
}
