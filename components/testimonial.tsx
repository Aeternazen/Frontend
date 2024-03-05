import type { NextPage } from "next";
import Column from "./column";

const Testimonial: NextPage = () => {
  return (
    <section className="self-stretch bg-color-neutral-white overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px_0px] max-w-full text-left text-29xl text-border-primary font-text-regular-semi-bold mq800:gap-[80px_0px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[80px_0px]">
      <div className="w-[560px] flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Our Satisfied Learners
        </h1>
        <div className="w-[560px] relative text-lg leading-[150%] font-text-small-link inline-block">
          Our clients love the results they've achieved with us. Hear from some
          of our satisfied customers and see how we've helped them transform
          their lives.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_32px] min-h-[394px] max-w-full text-xl font-text-small-link mq800:gap-[0px_32px]">
        <Column
          quote={`"Lorem ipsum dolor sit amet."`}
          avatarImage="/avatar-image@2x.png"
          nameSurname="Quinton Engel"
          longevityInfo="Contractor"
        />
        <Column
          quote={`"If you’re looking to get well-defined muscles with quick results, this is the plan for you. Absolutely love it and still use it today!"`}
          avatarImage="/avatar-image-1@2x.png"
          nameSurname="Jada Okaikoi"
          longevityInfo="Biomedical Engineering Researcher"
          propAlignSelf="unset"
          propWidth="416px"
        />
        <Column
          quote={`"Ut enim ad minima veniam."`}
          avatarImage="/avatar-image@2x.png"
          nameSurname="Junsei Suga"
          longevityInfo="Business Student"
          propAlignSelf="stretch"
          propWidth="unset"
        />
      </div>
    </section>
  );
};

export default Testimonial;
