"use client";

import { useState } from "react";

import { medium } from "@/app/layout";
import ArchitectSetting from "@/components/Admin/Common/ArchitectSetting";
import EditNoobProHacker from "@/components/Admin/NoobProHackrer/EditNoobProHacker";
import ContentSetting from "@/components/Admin/Common/ContentSetting";
import { useContentSetting } from "@/hooks/Admin/NoobProHacker/useContentSetting";
import { useImageSetting } from "@/hooks/Admin/NoobProHacker/useImageSetting";
import LineSetting from "@/components/Admin/Common/LineSetting";
import { useLineSetting } from "@/hooks/Admin/NoobProHacker/useLineSetting";
import ImageSetting from "@/components/Admin/NoobProHackrer/ImageSetting";

export default function Page() {
  const [page, setPage] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const moveToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const { contentInfo, handleInputChange } = useContentSetting();
  const { subjects, handleSelectClick, submitImage } = useImageSetting({
    moveToNextPage,
  });
  const { lineInfo, handleSubmit } = useLineSetting({ isEdit });

  const addProgression = () => {
    switch (page) {
      case 0:
        return (
          <ContentSetting
            moveToNextPage={moveToNextPage}
            contentInfo={contentInfo}
            handleInputChange={handleInputChange}
          />
        );

      case 1:
        return <ArchitectSetting moveToNextPage={moveToNextPage} />;

      case 2:
        return (
          <ImageSetting moveToNextPage={moveToNextPage} lineInfo={lineInfo} />
        );

      case 3:
        return (
          <LineSetting
            isEdit={isEdit}
            lineInfo={lineInfo}
            handleSubmit={handleSubmit}
          />
        );
    }
  };

  return (
    <div className="">
      <h2 className={`${medium.className} text-3xl text-text-primary`}>
        눕프로해커
      </h2>
      <EditNoobProHacker isEdit={isEdit} setIsEdit={setIsEdit} />
      {!isEdit && addProgression()}
    </div>
  );
}
