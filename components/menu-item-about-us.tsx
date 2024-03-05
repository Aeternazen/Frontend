import type { NextPage } from "next";

export type MenuItemAboutUsType = {
  greenTestTube?: string;
  pageNine?: string;
  loremIpsumDolorSitAmetCon?: string;
};

const MenuItemAboutUs: NextPage<MenuItemAboutUsType> = ({
  greenTestTube,
  pageNine,
  loremIpsumDolorSitAmetCon,
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[0px_12px] text-left text-base text-link-secondary font-text-regular-semi-bold">
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0"
        alt=""
        src={greenTestTube}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[150%] font-semibold">
          {pageNine}
        </div>
        <div className="self-stretch relative text-sm leading-[150%] font-text-small-link text-text-secondary">
          {loremIpsumDolorSitAmetCon}
        </div>
      </div>
    </div>
  );
};

export default MenuItemAboutUs;
