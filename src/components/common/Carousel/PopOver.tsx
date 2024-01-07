import Link from "next/link";

type Props = {
  minecraft_id: string[];
  isOpenPopOver: boolean[][];
  index: number;
  detailIndex: number;
};

export default function PopOver(props: Props) {
  const { minecraft_id, isOpenPopOver, index, detailIndex } = props;

  return (
    <div className="text-[#ccc]" style={{ textShadow: "1px 1px 1px #222" }}>
      {minecraft_id.length === 1 ? (
        <Link href={`/architect/${minecraft_id}`}>
          <span
            className="ml-3 hover:cursor-pointer hover:text-[white]"
            onClick={(e) => e.stopPropagation()}
          >
            {minecraft_id}
          </span>
        </Link>
      ) : (
        <div
          className="grid w-[100%] grid-cols-3 gap-3 gap-x-6 rounded-lg bg-[rgba(0,0,0,0.5)] p-2 py-4 text-center text-sm lg:p-4 lg:text-base"
          style={{
            display: isOpenPopOver[index][detailIndex] ? "grid" : "none",
          }}
        >
          {minecraft_id.map((item) => (
            <Link key={item} href={`/architect/${item}`}>
              <span
                onClick={(e) => e.stopPropagation()}
                className="text-[#ccc] hover:cursor-pointer hover:text-[white]"
                style={{ textShadow: "1px 1px 1px #222" }}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
