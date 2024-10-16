"use client";
import BaseButton from "@/features/components/BaseButton";
import Wrapper from "@/features/components/Wrapper";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Banner = () => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".char",
          start: "top center",
          // markers: true,
          // scrub: true,
          // toggleActions: "restart none reserve none",
        },
      });
      tl.fromTo(
        ".char",
        {
          autoAlpha: 0,
          scale:7,
          rotateY:90
        },
        {
          autoAlpha: 1,
          ease: "power4.out",
          rotateY:720,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    });
    return () => ctx.revert();
  }, [ref]);

  const splitText = (text: string) => {
    return (
      <div className="char inline-block mr-2 font-semibold xl:text-[80px] xl:leading-[88px] text-[60px] leading-[64px] text-[#202225] z-20">
        {text.split("").map((x) => (
          <span key={x} className="char inline-block">
            {x}
          </span>
        ))}
      </div>
    );
  };

  return (
    <Wrapper hasBackground>
      <div className="w-full grid grid-cols-5">
        <div className="flex-col lg:justify-start lg:items-start center text-center lg:text-left gap-6 relative lg:col-span-3 col-span-5 w-full mb-6">
          <div
            ref={ref}
            className="font-semibold xl:text-[80px] xl:leading-[88px] text-[60px] leading-[64px] text-[#202225] z-20"
          >
            {splitText("Crypto")}
            {splitText("currency")}
            {splitText("conversion")}
            {splitText("service.")}
          </div>
          <p className="font-medium xl:text-[28px] xl:leading-[36px] text-[18px] leading-[26px] text-[#787F84] z-20">
            A conventional payment system for the Digital World.
          </p>
          <div className="flex gap-4 items-center">
            <BaseButton type="primary">Let's Started</BaseButton>
            <BaseButton>Learn more</BaseButton>
          </div>
          {/* <div className="h-[160px]" />
          <div className="flex items-center gap-4">
            <ArrowDownIcon />
            <p className="font-medium text-[12px] leading-4 text-[#787F84]">
              Scroll down
            </p>
          </div> */}
        </div>
        <img
          alt="mock"
          src="https://picsum.photos/400"
          className="xl:size-[90%] size-[375px] lg:col-span-2 col-span-5 mx-auto"
        />
      </div>
    </Wrapper>
  );
};

export default Banner;
