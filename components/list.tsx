import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ListType = {
  scienceBook?: string;
  heading?: string;
  contentConnection?: string;
  cogwheelSettingsPeople?: string;
  heading1?: string;
  privacyPolicyTermsOfServi?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const List: NextPage<ListType> = ({
  scienceBook,
  heading,
  contentConnection,
  cogwheelSettingsPeople,
  heading1,
  privacyPolicyTermsOfServi,
  propWidth,
  propAlignSelf,
  propWidth1,
  propAlignSelf1,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const privacyPolicyTermsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth1, propAlignSelf1]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_48px] max-w-full text-left text-13xl text-border-primary font-heading-h4 mq800:flex-wrap mq450:gap-[0px_48px]">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[261px] max-w-full">
        <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={scienceBook}
        />
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[130%] italic font-normal font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
          {heading}
        </h1>
        <div className="w-[402px] relative text-base leading-[150%] font-text-small-link inline-block">
          {contentConnection}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[261px] max-w-full">
        <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={cogwheelSettingsPeople}
        />
        <h1
          className="m-0 w-[402px] relative text-inherit tracking-[-0.04em] leading-[130%] inline-block italic font-normal font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]"
          style={headingStyle}
        >
          {heading1}
        </h1>
        <div
          className="w-[402px] relative text-base leading-[150%] font-text-small-link inline-block"
          style={privacyPolicyTermsStyle}
        >
          {privacyPolicyTermsOfServi}
        </div>
      </div>
    </div>
  );
};

export default List;
