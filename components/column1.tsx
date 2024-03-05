import type { NextPage } from "next";

export type Column1Type = {
  placeholderImage?: string;
  heading?: string;
  columnLongevityInfo?: string;
  button?: string;
};

const Column1: NextPage<Column1Type> = ({
  placeholderImage,
  heading,
  columnLongevityInfo,
  button,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start gap-[32px_0px] max-w-full text-center text-5xl text-border-primary font-text-small-link mq450:gap-[32px_0px]">
      <img
        className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
          <h3 className="m-0 w-[405px] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
            {heading}
          </h3>
          <div className="w-[405px] relative text-base leading-[150%] inline-block">
            {columnLongevityInfo}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-2 px-0 pb-0 text-left text-base font-heading-desktop-h2">
          <div className="flex flex-row items-center justify-center gap-[0px_8px]">
            <div className="relative leading-[150%]">{button}</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column1;
