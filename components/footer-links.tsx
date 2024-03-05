import type { NextPage } from "next";
import FrameComponent from "./frame-component";

const FooterLinks: NextPage = () => {
  return (
    <section className="w-[1352px] flex flex-row flex-wrap items-start justify-start pt-0 px-5 pb-28 box-border gap-[0px_80px] max-w-full text-left text-29xl text-border-primary font-text-regular-semi-bold mq800:gap-[0px_80px] mq450:gap-[0px_80px]">
      <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px] min-w-[400px] max-w-full mq800:gap-[32px_0px] mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 w-[616px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Our Process: Simple Steps to a Longer Life
          </h1>
        </div>
        <div className="w-[335px] h-14 flex flex-row items-center justify-start pt-4 px-0 pb-0 box-border max-w-full">
          <button className="cursor-pointer py-2 px-5 bg-text-success h-[42px] flex-1 rounded-xl box-border flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-pale-emerald hover:bg-limegreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
            <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-border-primary text-left">
              WATCH MY FREE TRAINING
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[400px] max-w-full text-xl font-text-small-link mq800:min-w-full">
        <FrameComponent
          connection="/connection.svg"
          heading="Step 1"
          text="Join our longevity community so you're supported and held accountable every step of the way."
        />
        <FrameComponent
          connection="/brain.svg"
          heading="Step 2"
          text="Learn everything you need to know to integrate healthy longevity-boosting health, fitness, and wellness practices into your busy life."
        />
        <FrameComponent
          connection="/treadmillrunning.svg"
          heading="Step 3"
          text="Achieve lasting lifestyle change as you implement healthy habits into your daily life."
        />
        <div className="self-stretch flex flex-col items-end justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_40px] max-w-full mq800:flex-wrap mq800:gap-[0px_40px]">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/accountsgroupstarrating-1.svg"
            />
            <b className="flex-1 relative leading-[140%] inline-block min-w-[47px] max-w-full mq450:text-base mq450:leading-[22px]">
              Step 4
            </b>
          </div>
          <div className="w-[528px] relative text-base leading-[150%] inline-block max-w-full mt-[-4px]">
            Join our ascension program and maximize your success with
            personalized ongoing care aimed at maximizing your longevity.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;
