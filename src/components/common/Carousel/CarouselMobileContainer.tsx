import { useSlider } from "@/hooks/useSlider";

type Props = {
  length: number;
  children: React.ReactNode;
};

export default function CarouselMobileContainer(props: Props) {
  const { length, children } = props;

  const { scrollX, isOnScroll, ref, onTouchStart, onTouchMove, onTouchEnd } =
    useSlider(length);

  return (
    <div
      className="flex "
      ref={ref}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        transform: `translateX(${scrollX}px)`,
        transitionDuration: isOnScroll ? "0ms" : "400ms",
      }}
    >
      {children};
    </div>
  );
}
