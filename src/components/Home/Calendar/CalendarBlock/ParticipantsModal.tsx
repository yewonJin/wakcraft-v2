import { Fragment, useState } from "react";
import { useQueries } from "react-query";

import { medium } from "@/app/layout";
import { getArchitectByMinecraftId } from "@/api/client/architect";
import { Architect, tierArray } from "@/domains/architect";
import ArchitectTitle from "@/components/Architect/Common/ArchitectTitle";
import Button from "@/components/common/Button/Button";

type Props = {
  participants: string[];
  closeModal: () => void;
};

export default function ParticipantsModal(props: Props) {
  const { participants, closeModal } = props;

  const ress = useQueries<Architect[]>(
    participants.map((participant) => {
      return {
        queryKey: ["getArchitectById", participant],
        queryFn: () => getArchitectByMinecraftId(participant),
      };
    }),
  );

  return (
    <Fragment>
      <div
        className={`fixed left-0 top-0 z-20 h-[100vh] w-full bg-[rgba(0,0,0,0.8)] hover:cursor-auto`}
      >
        <div
          className=" mx-auto mt-40 max-w-[1000px]  bg-background-secondary p-8 text-text-primary"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <h2 className={`text-2xl ${medium.className}`}>참가자 명단</h2>
            <Button value="닫기" handleButtonClick={closeModal} />
          </div>
          <div className="mt-8 flex h-[50vh] flex-col gap-2  overflow-y-scroll">
            {ress.every((item) => item.isSuccess) ? (
              ress
                .sort((a, b) => {
                  const architectA = a.data as Architect;
                  const architectB = b.data as Architect;

                  return (
                    tierArray.indexOf(architectA.curTier) -
                    tierArray.indexOf(architectB.curTier)
                  );
                })
                .map((res) => {
                  const architect = res.data as Architect;

                  return (
                    <div
                      className="p-2 hover:cursor-pointer hover:bg-background-tertiary"
                      key={architect.minecraft_id}
                      onClick={() =>
                        window.open(`/architect/${architect.minecraft_id}`)
                      }
                    >
                      <ArchitectTitle type="detail" architect={architect} />
                    </div>
                  );
                })
            ) : (
              <div>로딩중...</div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
