"use client";

import { useState } from "react";

import { medium } from "@/app/layout";
import ContentSetting from "@/components/Admin/NoobProHackrer/ContentSetting/ContentSetting";
import ArchitectSetting from "@/components/Admin/NoobProHackrer/ArchitectSetting/ArchitectSetting";
import ImageSetting from "@/components/Admin/NoobProHackrer/ImageSetting/ImageSetting";
import LineSetting from "@/components/Admin/NoobProHackrer/LineSetting/LineSetting";

export default function Page() {
  const [page, setPage] = useState(0);

  const moveToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const progression = () => {
    switch (page) {
      case 0:
        return <ContentSetting moveToNextPage={moveToNextPage} />;

      case 1:
        return <ArchitectSetting moveToNextPage={moveToNextPage} />;

      case 2:
        return <ImageSetting moveToNextPage={moveToNextPage} />;

      case 3:
        return <LineSetting />;
    }
  };

  return (
    <div className="">
      <h2 className={`${medium.className} text-3xl text-text-primary`}>
        눕프로해커
      </h2>
      {progression()}
    </div>
  );
}
