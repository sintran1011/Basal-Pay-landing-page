"use client";
import BaseButton from "@/features/components/BaseButton";
import Wrapper from "@/features/components/Wrapper";
import LottieScrollTrigger from "@/utils/hooks/useLottieScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LaunchDemo = () => {
  const textCss = "font-medium text-[22px] leading-8 text-[#787F84]";
  const lottieTween = useRef<any>();
  useLayoutEffect(() => {
    if (!lottieTween.current) {
      lottieTween.current = LottieScrollTrigger({
        trigger: ".launchDemo",
        target: ".lottie-container2",
        path: "/LaunchDemo.json",
        speed: "medium",
        start: "top 60%",
        scrub: false,
        toggleActions: "restart none none none",
        // markers: true,
      });
    }
  }, []);
  return (
    <Wrapper className="launchDemo lg:mb-[100px]">
      <div className="grid justify-start items-center gap-10 grid-cols-2">
        <div className="flex flex-col gap-6 lg:justify-start lg:items-start items-center justify-center lg:col-span-1 col-span-2">
          <p className={textCss}>Expand your businesses reach to</p>
          <p className="xl:text-[128px] xl:leading-[160px] text-[90px] leading-[100px] text-[#202225] font-medium">
            560M+
          </p>
          <p className={textCss}>Digital currency users globally.</p>
          <BaseButton type="primary">Launch a demo</BaseButton>
        </div>
        <div className="xl:size-[412px] size-full lg:col-span-1 col-span-2 lottie-container2" />
      </div>
    </Wrapper>
  );
};

export default LaunchDemo;
