import type { NextPage } from "next";
import List from "./list";

const Layout: NextPage = () => {
  return (
    <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-row items-start justify-center py-28 px-16 box-border max-w-full z-[1] text-left text-29xl text-border-primary font-text-regular-semi-bold mq800:gap-[0px_80px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[0px_80px]">
      <div className="flex-1 flex flex-row items-start justify-start gap-[0px_80px] max-w-full mq800:gap-[0px_80px] mq450:gap-[0px_80px] mq1325:flex-wrap">
        <div className="w-[380px] flex flex-col items-start justify-start gap-[24px_0px] min-w-[380px] max-w-full mq800:min-w-full mq1325:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] mq1325:self-stretch mq1325:w-auto">
              <h1 className="m-0 w-[380px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                What You'll Get with Aeternazen
              </h1>
              <div className="w-[380px] relative text-lg leading-[150%] font-text-small-link inline-block">{`Our flagship online course provides you with lifetime access to a community of longevity enthusiasts, lifetime support, and weekly Q&A sessions. Learn how to transform your life and achieve optimal health.`}</div>
            </div>
          </div>
          <div className="w-[335px] h-14 flex flex-row items-center justify-start pt-4 px-0 pb-0 box-border max-w-full">
            <button className="cursor-pointer py-2 px-5 bg-text-success h-[42px] flex-1 rounded-xl box-border flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-pale-emerald hover:bg-limegreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
              <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-border-primary text-left">
                WATCH MY FREE TRAINING
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px_0px] min-w-[554px] max-w-full text-13xl font-heading-h4 mq800:min-w-full mq1125:gap-[64px_0px] mq450:gap-[64px_0px]">
          <List
            scienceBook="/sciencebook-1.svg"
            heading="Know the Latest Techniques"
            contentConnection="Regular updates with the latest in longevity science explained as actionable steps that don't require formal scientific training."
            cogwheelSettingsPeople="/cogwheelsettingspeople.svg"
            heading1="Personalized Longevity Health Evaluation"
            privacyPolicyTermsOfServi="One-on-one evaluation with a Customer Success Manager who will help you map out your specific life needs to maximize your success"
          />
          <List
            scienceBook="/heartrate.svg"
            heading="Support for Your Health Success"
            contentConnection="Lifetime access to a community of like-minded longevity learners where you can share your success and be supported to stay motivated in your health goals"
            cogwheelSettingsPeople="/trainer.svg"
            heading1={`Group Coaching and Q&A Sessions`}
            privacyPolicyTermsOfServi="Affiliate commissions from our trusted partners"
            propWidth="unset"
            propAlignSelf="stretch"
            propWidth1="unset"
            propAlignSelf1="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default Layout;
