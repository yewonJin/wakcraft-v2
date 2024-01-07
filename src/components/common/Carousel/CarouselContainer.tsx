type Props = {
  page: number[];
  index: number;
  children: React.ReactNode;
};

export default function CarouselContainer(props: Props) {
  const { page, index, children } = props;

  return (
    <div
      className={
        "relative mt-8 flex aspect-video overflow-x-scroll xl:aspect-auto xl:h-[50vh] xl:overflow-x-hidden " +
        "category-scrollbar"
      }
    >
      <div
        className="relative mx-auto flex w-full gap-14 duration-1000 ease-in-out md:max-w-[1200px]"
        style={{
          transform: `translateX(calc(${-page[index] * 50 * (16 / 9)}vh - ${
            page[index] * 56
          }px))`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
