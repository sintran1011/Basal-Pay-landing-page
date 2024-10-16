"use client";
import Wrapper from "@/features/components/Wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const textArr = [
    {
      src: "/assets/solution1.png",
      title: "Payment Gateway",
      content: "Top cryptocurrency payment gateway for businesses.",
    },
    {
      src: "/assets/solution2.png",
      title: "Digital Wallets & FinTech",
      content:
        "Create digital accounts. Speed up global settlements in cryptocurrency.",
    },
    {
      src: "/assets/solution3.png",
      title: "Legal & secure",
      content:
        "Basal Pay is a crypto payment provider that complies with AML-CFT.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card",
          start: "top center",
          // markers: true,
          // scrub: true,
          // toggleActions: "restart none reserve none",
        },
      });
      tl.fromTo(
        ".card",
        {
          y: 0,
          opacity: 0,
          marginTop: 40,
        },
        {
          duration: 2,
          y: -70,
          opacity: 1,
          stagger: 0.5,
          ease: "power4.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const renderCard = () => {
    return textArr.map((item, index) => (
      <div
        key={index}
        className={`h-[348px] lg:col-span-2 md:col-span-3 col-span-6 card`}
      >
        <img src={item.src} alt="solutions" className="w-full" />
        <div className="mt-3">
          <p className="font-semibold text-[22px] leading-8 text-[#313336]">
            {item.title}
          </p>
          <p className="font-medium text-base leading-7 text-[#787F84]">
            {item.content}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <Wrapper className="solution xl:pb-[128px] pb-0">
      <div className="">
        <p className="title mb-14">Our Solutions</p>
        <div className="grid grid-cols-6 gap-3 w-full">{renderCard()}</div>
      </div>
      {/* <div className="w-full border-b-[2px] border-[#EEEEEE]" /> */}
    </Wrapper>
  );
};

export default Solutions;
