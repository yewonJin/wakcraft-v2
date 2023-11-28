"use client";

import { useQuery } from "react-query";

import { medium } from "@/app/layout";
import Content from "@/components/Admin/PlacementTest/Content";
import { getCurSeason } from "@/api/client/placementTest";
import { getImagesName } from "@/api/client/aws";
import Participants from "@/components/Admin/PlacementTest/Participants";

export default function Page() {
  const { data: curSeason } = useQuery(["getCurSeason"], getCurSeason);
  const { data: imagesName } = useQuery(
    ["getAllImages"],
    () => getImagesName("placementTest", curSeason),
    {
      enabled: !!curSeason,
    },
  );

  if (!curSeason || !imagesName) {
    return <div className="mt-8 text-lg text-text-primary">loading...</div>;
  }

  return (
    <div className="">
      <h2 className={`${medium.className} text-3xl text-text-primary`}>
        배치고사
      </h2>
      <Content curSeason={curSeason} />
      <Participants imagesName={imagesName} />
    </div>
  );
}
