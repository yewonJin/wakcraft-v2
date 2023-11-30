type Props = {
  episode: number;
  subject: string;
};

export default function Title(props: Props) {
  const { episode, subject } = props;

  return (
    <div className="flex flex-col gap-4">
      <h3
        className={
          "text-2xl text-text-secondary md:text-[#aaa] lg:text-[28px] lg:leading-9"
        }
      >{`제 ${episode}회`}</h3>
      <h2 className="text-4xl text-text-primary md:text-[white] lg:text-[46px] lg:leading-[58px]">
        {`눕프로해커 :  ${subject}편`}
      </h2>
    </div>
  );
}
