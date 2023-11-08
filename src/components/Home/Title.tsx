type Props = {
  episode: number;
  subject: string;
};

export default function Title(props: Props) {
  const { episode, subject } = props;

  return (
    <div className="flex flex-col ">
      <h3 className={"text-[28px] text-[#aaa]"}>{`제 ${episode}회`}</h3>
      <h2 className=" text-[46px] text-[white]">
        {`눕프로해커 :  ${subject}편`}
      </h2>
    </div>
  );
}
