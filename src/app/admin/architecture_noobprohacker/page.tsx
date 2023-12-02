"use client";

import { useState } from "react";

import { medium } from "@/app/layout";
import ContentSetting from "@/components/Admin/ArchitectureNoobProHacker/ContentSetting";
import ArchitectSetting from "@/components/Admin/NoobProHackrer/ArchitectSetting/ArchitectSetting";
import LineSetting from "@/components/Admin/ArchitectureNoobProHacker/LineSetting";
import EditArchitectureNoobProHacker from "@/components/Admin/ArchitectureNoobProHacker/EditArchitectureNoobProHacker";
import ImageSetting from "@/components/Admin/ArchitectureNoobProHacker/ImageSetting";

export default function Page() {
  const [page, setPage] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const moveToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const addProgression = () => {
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
      <EditArchitectureNoobProHacker isEdit={isEdit} setIsEdit={setIsEdit} />
      {!isEdit && addProgression()}
    </div>
  );
}
