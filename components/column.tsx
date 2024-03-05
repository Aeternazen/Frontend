import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ColumnType = {
  quote?: string;
  avatarImage?: string;
  nameSurname?: string;
  longevityInfo?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Column: NextPage<ColumnType> = ({
  quote,
  avatarImage,
  nameSurname,
  longevityInfo,
  propAlignSelf,
  propWidth,
}) => {
  const quoteStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[32px_0px] min-w-[312px] max-w-full text-left text-xl text-border-primary font-text-small-link mq450:gap-[32px_0px]">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0px_4px]">
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <b
        className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]"
        style={quoteStyle}
      >
        {quote}
      </b>
      <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base font-text-regular-semi-bold">
        <img
          className="w-14 h-14 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={avatarImage}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[150%] font-semibold">
            {nameSurname}
          </div>
          <div className="relative leading-[150%] font-text-small-link">
            {longevityInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
