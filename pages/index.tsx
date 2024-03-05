import type { NextPage } from "next";
import Content1 from "../components/content1";
import MegaMenu from "../components/mega-menu";
import Layout2 from "../components/layout2";
import Content from "../components/content";
import Layout1 from "../components/layout1";
import FrameComponent1 from "../components/frame-component1";
import FooterLinks from "../components/footer-links";
import Testimonial from "../components/testimonial";
import Layout from "../components/layout";
import Footer from "../components/footer";

const HomeDesktop: NextPage = () => {
  return (
    <div className="w-full h-[7757px] relative bg-color-neutral-white overflow-hidden tracking-[normal] mq1325:h-auto mq1325:min-h-[7757]">
      <main className="absolute h-full w-full top-[0.2px] right-[0.2px] bottom-[-0.2px] left-[-0.2px] bg-color-neutral-white flex flex-col items-center justify-start max-w-full text-center text-lg text-magnolia font-text-regular-semi-bold">
        <section className="self-stretch bg-background-color-secondary flex flex-col items-start justify-start max-w-full">
          <Content1 />
          <MegaMenu />
        </section>
        <Layout2 />
        <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-border-primary font-heading-h4 mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_80px] max-w-full mq800:gap-[0px_80px] mq450:gap-[0px_80px]">
            <img
              className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
              loading="lazy"
              alt=""
              src="/placeholder-image-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px_0px] min-w-[400px] max-w-full mq800:min-w-full">
              <h1 className="m-0 w-[616px] relative text-inherit tracking-[-0.04em] leading-[120%] inline-block italic font-semibold font-inherit mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                Starting to Notice Signs of Aging? You're Not Alone.
              </h1>
              <div className="w-[616px] relative text-lg leading-[150%] font-text-small-link inline-block">
                <p className="m-0">
                  Your busy life seems to pass by faster and faster. Now, you're
                  a bit more fatigued, your health isn't quite what it was, and
                  you see new lines in the mirror each morning. Your packed
                  schedule leaves little time for self-care. You've lost your
                  energetic self. You want change, but with all the conflicting
                  health and wellness information, you're not sure where to
                  start.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Now, imagine this getting worse – lower energy, less health, a
                  fading zest for life. You'll have even less ability in those
                  future moments to appreciate what you really love in life...
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  It's a bleak picture, but it doesn't have to be your future.
                  Aging is still inevitable (for now), but how you age is up to
                  you. We're here to help you regain control.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Content />
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-16 box-border max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border">
          <div className="self-stretch bg-aeternazen-electric-indigo box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[0px_16px] max-w-full border-[1px] border-solid border-link-primary">
            <div className="flex-1 box-border flex flex-row items-start justify-center py-0 pr-0 pl-12 min-w-[801px] max-w-full border-[1px] border-solid border-gray mq1125:pl-6 mq1125:box-border mq1125:min-w-full">
              <div className="relative leading-[150%] font-extrabold">
                <p className="m-0">
                  ATTENTION: This is only for you if you're committed to a
                  lifelong journey of health – not a quick fix,
                </p>
                <p className="m-0">
                  but a dedication to sustainable change. We've got your back,
                  but it'll take hard work from you
                </p>
              </div>
            </div>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <Layout1 />
        <FrameComponent1 />
        <FooterLinks />
        <Testimonial />
        <Layout />
        <Footer />
      </main>
    </div>
  );
};

export default HomeDesktop;
