import type { NextPage } from "next";
import Column1 from "./column1";

const Layout1: NextPage = () => {
  return (
    <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px_0px] max-w-full text-center text-21xl text-border-primary font-heading-h4 mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
      <h1 className="m-0 w-[768px] relative text-inherit tracking-[-0.04em] leading-[120%] inline-block italic font-semibold font-inherit max-w-full mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
        Services for Success: Your Wellness, Our Shared Commitment
      </h1>
      <div className="self-stretch grid flex-row items-start justify-center gap-[0px_48px] max-w-full grid-cols-[repeat(3,_minmax(304px,_1fr))] text-5xl font-text-small-link mq800:gap-[0px_48px] mq800:grid-cols-[minmax(304px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(304px,_526px))]">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[32px_0px] max-w-full mq450:gap-[32px_0px]">
          <img
            className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/placeholder-image-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
              <h3 className="m-0 w-[405px] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
                Master the Art of Longevity with Our Online Course
              </h3>
              <div className="w-[405px] relative text-base leading-[150%] inline-block">{`Our comprehensive online course provides lifetime access to our longevity community, weekly Q&A sessions, and science-backed deep health habits.`}</div>
            </div>
            <div className="self-stretch h-10 flex flex-col items-center justify-start max-w-full">
              <button className="cursor-pointer py-2 px-5 bg-text-success w-[337px] h-[42px] rounded-xl box-border flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-pale-emerald hover:bg-limegreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
                <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-border-primary text-left">
                  WATCH MY FREE TRAINING
                </div>
              </button>
            </div>
          </div>
        </div>
        <Column1
          placeholderImage="/placeholder-image-3@2x.png"
          heading="Stay Informed with Our Informative Articles"
          columnLongevityInfo="Explore our collection of articles on longevity, health, and fitness to stay up to date with the latest research and insights."
          button="Read More"
        />
        <Column1
          placeholderImage="/placeholder-image-4@2x.png"
          heading="Optimize Your Longevity Journey with Our Recommended Products"
          columnLongevityInfo="Discover our recommended longevity supplements, as well as health, fitness, and nutrition products to support your overall well-being."
          button="Shop Now"
        />
      </div>
    </section>
  );
};

export default Layout1;
