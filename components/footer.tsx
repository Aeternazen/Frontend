import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-rasin-black overflow-hidden flex flex-col items-center justify-start py-20 px-16 box-border gap-[80px_0px] max-w-full z-[2] text-left text-base text-magnolia font-text-small-link mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1325:flex-wrap mq1325:justify-center">
        <div className="w-[500px] flex flex-col items-start justify-start gap-[24px_0px] min-w-[500px] max-w-full mq800:min-w-full mq1325:flex-1">
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-col items-start justify-start relative">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/aeternazen-color-logo-no-background-1.svg"
              />
              <img
                className="w-[72px] h-[72px] overflow-hidden shrink-0 object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/darkmode-false@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch relative leading-[150%]">
            Stay up to date on features and releases by joining our newsletter.
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full text-xs">
            <div className="self-stretch h-12 flex flex-row items-start justify-start gap-[0px_16px] max-w-full">
              <div className="flex-1 bg-color-neutral-white box-border flex flex-row items-center justify-start py-3 pr-[13px] pl-[11px] max-w-[calc(100%_-_137px)] border-[1px] border-solid border-border-primary">
                <input
                  className="w-full [border:none] [outline:none] font-heading-desktop-h2 text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-link-secondary text-left inline-block min-w-[205px] max-w-full"
                  placeholder="Your email"
                  type="text"
                />
              </div>
              <button className="cursor-pointer py-3 px-6 bg-aeternazen-electric-indigo h-[50px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-center border-[1px] border-solid border-link-primary hover:bg-blueviolet hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumslateblue">
                <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-magnolia text-left">
                  Subscribe
                </div>
              </button>
            </div>
            <div className="w-[500px] relative leading-[150%] inline-block">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </div>
          </div>
        </div>
        <div className="w-[684px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[0px_40px] min-w-[684px] max-w-full font-text-regular-semi-bold mq800:flex-wrap mq800:gap-[0px_40px] mq1125:min-w-full mq1325:flex-1 mq1325:pr-0 mq1325:box-border">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px_0px] min-w-[151px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Longevity Info
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-link-primary font-text-small-link">
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">
                  Hallmarks of aging
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start py-1 px-0">
                <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
                  Link Two
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start py-1 px-0">
                <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
                  Link Three
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start py-1 px-0">
                <div className="h-[21px] w-[231.3px] relative leading-[150%] inline-block shrink-0">
                  Link Four
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-start justify-start py-1 px-0">
                <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
                  Link Five
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px_0px] min-w-[151px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              More Links
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-link-primary font-text-small-link">
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">About Us</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">Contact Us</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">Partners</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">FAQ</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">
                  Testimonials
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">Careers</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">
                  Refunds Policy
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
                <div className="flex-1 relative leading-[150%]">
                  Affiliate Disclosure
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[151px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Follow us
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-link-primary font-text-small-link">
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/icon--discord.svg"
                />
                <div className="relative leading-[150%]">Discord</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/icon--youtube.svg"
                />
                <div className="relative leading-[150%]">YouTube</div>
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-1 pl-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/frame.svg"
                />
                <div className="relative leading-[150%]">Spotify</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/tiktok.svg"
                />
                <div className="relative leading-[150%]">TikTok</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icon--facebook.svg"
                />
                <div className="relative leading-[150%]">Facebook</div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--instagram.svg"
                />
                <div className="relative leading-[150%]">Instagram</div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--x.svg"
                />
                <div className="relative leading-[150%]">Twitter</div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start py-2 px-0 gap-[0px_12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--linkedin.svg"
                />
                <div className="relative leading-[150%]">LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px] max-w-full text-sm mq800:gap-[32px_0px]">
        <div className="self-stretch h-px relative bg-border-primary box-border border-[1px] border-solid border-color-neutral-neutral-lighter" />
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px] mq800:flex-wrap">
          <div className="relative leading-[150%]">
            © 2024 Aeternazen LLC. All rights reserved.
          </div>
          <div className="w-[340px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_23px] max-w-full text-link-secondary mq450:flex-wrap">
            <div className="relative [text-decoration:underline] leading-[150%]">
              Privacy Policy
            </div>
            <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[68px]">
              Terms of Service
            </div>
            <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[65px]">
              Cookie Settings
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
