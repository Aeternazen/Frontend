import type { NextPage } from "next";
import MenuItemAboutUs from "./menu-item-about-us";

const MegaMenu: NextPage = () => {
  return (
    <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-16 gap-[0px_31px] max-w-full text-left text-base text-link-secondary font-text-regular-semi-bold border-b-[1px] border-solid border-border-primary mq800:gap-[0px_31px] mq800:pl-8 mq800:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[666px] max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_32px] max-w-full mq800:gap-[0px_32px] mq1125:flex-wrap">
          <div className="w-80 flex flex-col items-start justify-start gap-[24px_0px] min-w-[320px] mq1125:flex-1">
            <div className="self-stretch relative text-sm leading-[150%] font-semibold text-text-secondary">
              Learning Community
            </div>
            <div className="self-stretch flex flex-col items-end justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/accountsgroupstarrating.svg"
                />
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Ascension Members Private Area
                </div>
              </div>
              <div className="w-[284px] relative text-sm leading-[150%] font-text-small-link text-text-secondary inline-block">
                Premier members’ exclusive longevity hub
              </div>
            </div>
            <div className="self-stretch h-px relative bg-border-primary box-border border-[1px] border-solid border-text-secondary" />
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/sciencebook.svg"
                />
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Course Home
                </div>
              </div>
              <div className="relative text-sm leading-[150%] font-text-small-link text-text-secondary">
                Start your transformative longevity journey
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/bookshelflibrary.svg"
                />
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Course Details
                </div>
              </div>
              <div className="relative text-sm leading-[150%] font-text-small-link text-text-secondary">
                Explore our comprehensive longevity course
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/shieldstarbanner.svg"
                />
                <div className="flex-1 relative leading-[150%] font-semibold">
                  <p className="m-0">Free-When-You-Complete</p>
                  <p className="m-0">No-Risk Guarantee</p>
                </div>
              </div>
              <div className="w-[284px] relative text-sm leading-[150%] font-text-small-link text-text-secondary inline-block z-[1]">{`Our mutual success & satisfaction promise`}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[0px_32px] min-w-[437px] max-w-full mq800:flex-wrap mq800:gap-[0px_32px] mq800:min-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[208px]">
              <div className="self-stretch relative text-sm leading-[150%] font-semibold text-text-secondary">
                Content
              </div>
              <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/audioheadphones.svg"
                  />
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Podcasts
                  </div>
                </div>
                <div className="relative text-sm leading-[150%] font-text-small-link text-text-secondary z-[1]">{`On-the-go insights & tips for lifelong health`}</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                <div className="self-stretch flex flex-col items-end justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/likethumbsupsticker.svg"
                    />
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Social Media Updates
                    </div>
                  </div>
                  <div className="w-[284px] relative text-sm leading-[150%] font-text-small-link text-text-secondary inline-block z-[1]">
                    Stay informed with longevity updates
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-border-primary box-border border-[1px] border-solid border-text-secondary" />
                <div className="self-stretch flex flex-col items-end justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_12px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/dnascience.svg"
                    />
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      The Latest Science
                    </div>
                  </div>
                  <div className="w-[284px] relative text-sm leading-[150%] font-text-small-link text-text-secondary inline-block z-[1]">
                    Get the latest scoop from the labs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[208px] text-sm text-text-secondary">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Who We Are
              </div>
              <MenuItemAboutUs
                greenTestTube="/greentesttube.svg"
                pageNine="About Us"
                loremIpsumDolorSitAmetCon="What makes us tick and why we’re here"
              />
              <MenuItemAboutUs
                greenTestTube="/heartenvelope.svg"
                pageNine="Contact Us"
                loremIpsumDolorSitAmetCon="Get in touch"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 bg-border-primary flex flex-col items-start justify-start py-8 pr-16 pl-8 box-border gap-[16px_0px] text-sm font-text-small-link mq450:pr-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
          <div className="self-stretch relative leading-[150%] font-semibold font-text-regular-semi-bold text-text-secondary">
            Useful Categories
          </div>
          <div className="self-stretch relative leading-[150%]">
            General Longevity
          </div>
          <div className="self-stretch relative leading-[150%]">Fitness</div>
          <div className="self-stretch relative leading-[150%]">Nutrition</div>
          <div className="self-stretch relative leading-[150%]">
            Mental Health
          </div>
          <div className="self-stretch relative leading-[150%]">
            Weight Loss
          </div>
          <div className="self-stretch relative leading-[150%]">
            General Health
          </div>
          <div className="self-stretch relative leading-[150%]">
            Substance Abuse
          </div>
          <div className="self-stretch relative leading-[150%]">
            Medical Procedures
          </div>
          <div className="self-stretch relative leading-[150%]">
            On the Horizon
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start py-2 pr-2 pl-0">
            <div className="overflow-hidden flex flex-col items-center justify-start py-1 px-px">
              <img className="w-[21px] h-4 relative" alt="" src="/vector.svg" />
            </div>
          </div>
          <div className="w-10 flex flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--youtube.svg"
            />
          </div>
          <div className="w-10 flex flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="w-10 flex flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/tiktok.svg"
            />
          </div>
          <div className="w-10 flex flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--facebook.svg"
            />
          </div>
          <div className="w-px hidden flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--instagram.svg"
            />
          </div>
          <div className="w-px hidden flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--x.svg"
            />
          </div>
          <div className="w-px hidden flex-row items-center justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--linkedin.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
