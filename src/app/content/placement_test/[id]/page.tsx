import { medium } from "@/app/layout";
import ArchitectureInfo from "@/components/PlacementTest/ArchitectureInfo";
import ImageBox from "@/components/common/ImageBox";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        제 3회 배치고사
      </h1>
      <p className="mt-4 text-text-secondary">
        눕 10명, 프로 2명, 해커 1명이 같은 주제로 작품을 만든다.
      </p>
      <div className=" mt-16 grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2 2xl:w-[1400px] 2xl:grid-cols-3">
        <div className="relative">
          <ImageBox
            imageUrl={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/Zombieman-hacker.webp"
            }
          />
          <ArchitectureInfo
            minecraft_id="canindaeyo"
            placementResult="미지근한 국밥"
          />
        </div>
        <div className="relative">
          <ImageBox
            imageUrl={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2017/Viper-hacker.1080p.webp"
            }
          />
          <ArchitectureInfo minecraft_id="canindaeyo" placementResult="계륵" />
        </div>
        <div>
          <ImageBox
            imageUrl={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2041/Zombieman-noob.webp"
            }
          />
        </div>
        <div className="relative">
          <ImageBox
            imageUrl={
              "https://wakcraft.s3.ap-northeast-2.amazonaws.com/noobProHacker/episode%2017/Viper-hacker.1080p.webp"
            }
          />
          <ArchitectureInfo minecraft_id="canindaeyo" placementResult="계륵" />
        </div>
      </div>
    </div>
  );
}
