import { useState } from "react";

import GroupIcon from "../../../../../public/icons/groups.svg";
import ParticipantsModal from "./ParticipantsModal";

type Props = {
  participants: string[];
};

export default function Participants(props: Props) {
  const { participants } = props;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <span
      className="absolute bottom-2 right-2 z-10 hidden rounded-full bg-background-primary p-1 hover:cursor-pointer md:inline-block [&>svg]:fill-text-tertiary hover:[&>svg]:fill-text-secondary"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <GroupIcon />
      {isOpen && (
        <ParticipantsModal
          participants={participants}
          closeModal={closeModal}
        />
      )}
    </span>
  );
}
