"use client";

type Props = {
  curCategory: string;
  handleCategoryClick: (tier: string) => void;
};

export default function FilteringByTier(props: Props) {
  const { curCategory, handleCategoryClick } = props;

  return (
    <div className="relative select-none">
      <div
        className={
          "mt-4 flex w-full overflow-hidden overflow-x-scroll rounded-lg bg-background-secondary md:overflow-x-auto " +
          "category-scrollbar"
        }
      >
        <ul className="flex items-center gap-3 px-2 py-3 text-sm text-text-primary md:flex-wrap md:gap-4 md:overflow-x-hidden  md:text-base">
          {Object.keys(backgroundColorVariants).map((tier) => (
            <li
              key={tier}
              className={`w-max rounded-lg bg-background-primary p-2 px-3 ${backgroundColorVariants[tier]} duration-300 hover:cursor-pointer hover:text-[white]`}
              data-value={tier}
              onClick={() => handleCategoryClick(tier)}
              style={{
                color: curCategory === tier ? "white" : "",
                backgroundColor:
                  curCategory === tier
                    ? getHexColor(backgroundColorVariants[tier])
                    : "",
              }}
            >
              {tier}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type BackgroundColorVariants = {
  [key: string]: string;
};

const getHexColor = (value: string) => {
  return value.split("-")[1].replace("[", "").replace("]", "");
};

const backgroundColorVariants: BackgroundColorVariants = {
  마카게: "hover:bg-[#ec4899]",
  오마카세: "hover:bg-[#ec4899]",
  해커: "hover:bg-[#8b5cf6]",
  해장국: "hover:bg-[#8b5cf6]",
  국밥: "hover:bg-[#06b6d4]",
  "미지근한 국밥": "hover:bg-[#06b6d4]",
  "식은 국밥": "hover:bg-[#06b6d4]",
  프로: "hover:bg-[#f59e0b]",
  계추: "hover:bg-[#f59e0b]",
  계륵: "hover:bg-[#94a3b8]",
  "착한 눕": "hover:bg-[#94a3b8]",
  "안 나쁜 눕": "hover:bg-[#94a3b8]",
  눕: "hover:bg-[#a16207]",
  언랭: "hover:bg-[#a16207]",
};
