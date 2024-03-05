import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-border-primary font-heading-h4 mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0px_80px] max-w-full mq800:gap-[0px_80px] mq450:gap-[0px_80px]">
        <h1 className="m-0 w-[468px] relative text-inherit tracking-[-0.04em] leading-[120%] inline-block italic font-semibold font-inherit shrink-0 max-w-full mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          Empowering Your Journey to Longevity
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[497px] max-w-full text-base font-text-small-link mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="w-[764px] relative leading-[150%] inline-block">
              Imagine waking up each day energized and full of life. At
              Aeternazen, we help you to make this possible by translating
              complex longevity science into practical advice. Our methods are
              based on the latest longevity research, and they'll empower you to
              add not just years to your life, but life to your years.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="w-[764px] relative leading-[150%] inline-block">
              This isn't something to put off until you're already at retirement
              age; the sooner you start living a lasting longevity-focused
              lifestyle, the more impactful of a health difference you can make
              in your quality of life.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="w-[764px] relative leading-[150%] inline-block">
              We simplify the science of longevity, transforming it into daily
              routine adjustments. We'll work with you to tailor a solution to
              your busy life's unique needs. We're with you on this journey,
              providing answers, addressing concerns, and offering ongoing
              support to keep you on track.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="w-[764px] relative leading-[150%] inline-block">
              Our goal is to empower you to make the change you need in your
              life. By understanding your body and aging science, you can make
              informed health decisions. With us, you're not just extending your
              lifespan; you're enhancing your healthspan, adding vitality to
              your extra years.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="w-[764px] relative leading-[150%] inline-block">
              Ready to take control of your aging process and live a better,
              longer life? Let us guide you on your journey to longevity. It's
              time to embrace a longer future full of health, energy, and
              vitality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
