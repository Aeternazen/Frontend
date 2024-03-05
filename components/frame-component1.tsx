import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-28 box-border max-w-full text-left text-21xl text-border-primary font-heading-h4">
      <div className="flex-1 bg-color-neutral-white overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_80px] max-w-full mq800:gap-[0px_80px] mq450:gap-[0px_80px]">
          <img
            className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
            loading="lazy"
            alt=""
            src="/placeholder-image-5@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[32px_0px] min-w-[400px] max-w-full mq800:gap-[32px_0px] mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
              <h1 className="m-0 w-[616px] relative text-inherit tracking-[-0.04em] leading-[120%] inline-block italic font-semibold font-inherit mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                Discover the Path to a Healthier, Longer Life with Our Flagship
                Course
              </h1>
              <div className="w-[616px] relative text-lg leading-[150%] font-text-small-link inline-block">
                Enroll in our flagship course and unlock the secrets to living a
                longer, healthier life. Experience the transformation you've
                been needing.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full text-base font-text-small-link">
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_16px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/musclegain.svg"
                />
                <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
                  Boost Your Energy Levels
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_16px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/electriclightbulb.svg"
                />
                <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
                  Improve Your Mental Clarity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px_16px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/weightloss.svg"
                />
                <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
                  Enhance Your Physical Fitness
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
