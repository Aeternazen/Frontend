import type { NextPage } from "next";

const Layout2: NextPage = () => {
  return (
    <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-border-primary font-text-small-link mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_80px] max-w-full mq800:gap-[0px_80px] mq450:gap-[0px_80px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px_0px] min-w-[400px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
            <div className="relative leading-[150%] font-light">
              Democratizing Longevity
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] text-left text-29xl font-heading-desktop-h2">
              <h1 className="m-0 w-[616px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Unlock Your Potential for a Longer, Healthier Life!
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] font-text-small-link">
                We make longevity science accessible and actionable so you can
                thrive.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0">
            <button className="cursor-pointer py-2 px-[19px] bg-text-success rounded-xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-pale-emerald hover:bg-limegreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
              <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-border-primary text-left">
                WATCH MY FREE TRAINING
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="/placeholder-image@2x.png"
        />
      </div>
    </section>
  );
};

export default Layout2;
