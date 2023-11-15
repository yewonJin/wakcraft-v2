import { Fragment } from "react";

import { medium } from "../layout";
import Main from "@/components/Architect/Main";
import { getAllArchitects } from "@/api/architect";

export default async function Page() {
  const architects = await getAllArchitects();

  return (
    <Fragment>
      <h2 className={`text-3xl text-text-primary ${medium.className}`}>
        건축가
      </h2>
      <p className="mt-4 text-base text-text-secondary">
        마인크래프트 눕프핵 건축가들의 포트폴리오를 볼 수 있다.
      </p>
      <Main architects={JSON.parse(JSON.stringify(architects))} />
    </Fragment>
  );
}
