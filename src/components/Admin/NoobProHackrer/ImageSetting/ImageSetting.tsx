import { Fragment } from "react";
import Image from "next/image";

import { medium } from "@/app/layout";
import { renameToWebp } from "@/domains/noobprohacker";
import { useImageSetting } from "@/hooks/Admin/NoobProHacker/useImageSetting";

type Props = {
  moveToNextPage: () => void;
};

export default function ImageSetting(props: Props) {
  const { lineInfo, subjects, handleSelectClick, handleSubmit } =
    useImageSetting(props);

  return (
    <Fragment>
      <div className=" mt-16 flex items-center gap-8">
        <h2 className={`${medium.className} text-2xl text-text-primary`}>
          이미지 추가
        </h2>
        <button
          className="border-2 border-background-tertiary px-3 py-2 text-text-secondary"
          onClick={handleSubmit}
        >
          제출
        </button>
      </div>
      <div className="mt-10 grid grid-cols-5 gap-8">
        {new Array(5).fill(0).map((_, index) => (
          <div className="" key={index + 1 + "라인"}>
            <h3 className={`${medium.className} text-xl text-text-primary`}>
              {index + 1}라인
            </h3>
            <div className="mt-4 flex gap-2 [&>input]:h-[40px] [&>input]:w-full">
              <select
                onChange={(e) => handleSelectClick(e, index)}
                className="h-[40px] w-[200px] rounded-md border-2 border-background-tertiary bg-background-primary px-2 text-text-secondary outline-none"
              >
                <option value="" selected disabled hidden>
                  이미지 선택
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary">
              <h4>눕</h4>
              <div className="relative aspect-video">
                {lineInfo[index].line_details.noob.image_url && (
                  <Image
                    alt="눕 이미지"
                    fill
                    src={renameToWebp(
                      lineInfo[index].line_details.noob.image_url,
                    )}
                  />
                )}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary">
              <h4>프로</h4>
              <div className="relative aspect-video">
                {lineInfo[index].line_details.pro.image_url && (
                  <Image
                    alt="프로 이미지"
                    fill
                    src={renameToWebp(
                      lineInfo[index].line_details.pro.image_url,
                    )}
                  />
                )}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-base text-text-secondary">
              <h4>해커</h4>
              <div className="relative aspect-video">
                {lineInfo[index].line_details.hacker.image_url && (
                  <Image
                    alt="해커 이미지"
                    fill
                    src={renameToWebp(
                      lineInfo[index].line_details.hacker.image_url,
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
