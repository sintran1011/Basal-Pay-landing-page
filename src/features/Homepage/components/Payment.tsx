"use client";

import ArrowRightIcon from "@/app/assets/icons/ArrowRightIcon";
import Email from "@/app/assets/icons/Email";
import Wrapper from "@/features/components/Wrapper";
import LottieScrollTrigger from "@/utils/hooks/useLottieScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Payment = () => {
  const lottieTween = useRef<any>();

  useLayoutEffect(() => {
    if (!lottieTween.current) {
      lottieTween.current = LottieScrollTrigger({
        trigger: ".wrapper",
        target: ".lottie-container",
        path: "/QRScan.json",
        speed: "medium",
        start: "top 15%",
        end: "+=40%",
        pin: ".wrapper",
        scrub: 1,
        // markers: true,
      });
    }
    // return () => ctx.revert();
  }, []);

  return (
    <Wrapper className="wrapper w-full center pb-0">
      <div className="grid grid-cols-2 items-center lg:pt-10">
        <div className="flex-col flex md:col-span-1 col-span-2 gap-3">
          <p className="title">Digital Currency Payments</p>
          <p className="subTitle">
            Accept digital currencies via our Pay-by-link solution or embedded
            payments API for your check out.
          </p>
          <div className="mt-10 mr-auto rounded-lg bg-[#F5F6F7] px-4 h-14 flex items-center justify-start gap-3 relative xl:w-[476px] w-full">
            <Email />
            <p className="text-[#787F84] font-medium text-sm leading-6">
              Your email
            </p>
            <div className="absolute top-[6px] right-[6px] bg-[#2377FC] center rounded-[6px] size-11">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
        <div className="md:size-[400px] size-full lottie-container md:col-span-1 col-span-2 mt-6 xl:mt-0 mx-auto xl:scale-150"></div>
      </div>
    </Wrapper>
  );
};

export default Payment;
