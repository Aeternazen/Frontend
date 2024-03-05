import type { NextPage } from "next";

export type FrameComponentType = {
  connection?: string;
  heading?: string;
  text?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  connection,
  heading,
  text,
}) => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-xl text-border-primary font-text-small-link">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_40px] max-w-full mq800:flex-wrap mq800:gap-[0px_40px]">
        <img
          className="h-12 w-12 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={connection}
        />
        <b className="flex-1 relative leading-[140%] inline-block min-w-[45px] max-w-full mq450:text-base mq450:leading-[22px]">
          {heading}
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_64px] max-w-full mt-[-4px] text-base mq800:gap-[0px_64px] mq450:gap-[0px_64px]">
        <div className="h-[120px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
          <div className="w-0.5 flex-1 relative bg-border-primary box-border border-r-[2px] border-solid border-border-primary" />
        </div>
        <div className="w-[528px] relative leading-[150%] inline-block shrink-0 max-w-[calc(100%_-_64px)]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
