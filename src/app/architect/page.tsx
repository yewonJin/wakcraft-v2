import { Fragment } from "react";

import { getAllArchitects } from "@/api/server/architect";
import Main from "@/components/Architect/Main";
import PageTitle from "@/components/common/PageTitle";

export default async function Page() {
  const architects = await getAllArchitects();

  return (
    <Fragment>
      <PageTitle
        title="건축가"
        content="마인크래프트 눕프핵 건축가들의 포트폴리오를 볼 수 있다."
      />
      <Main architects={JSON.parse(JSON.stringify(architects))} />
    </Fragment>
  );
}
