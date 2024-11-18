"use client";
import Wrapper from "@/features/components/Wrapper";
import LottieScrollTrigger from "@/utils/hooks/useLottieScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GrowYourBusiness = () => {
  const contentArr = [
    {
      image: (
        <img src="/assets/grow-business-icon-1.png" alt="grow-business-icon" />
      ),
      content:
        "Reach new customers – those who prefer to pay and get paid in crypto.",
    },
    {
      image: (
        <img src="/assets/grow-business-icon-2.png" alt="grow-business-icon" />
      ),
      content: "Borderless and global",
    },
    {
      image: (
        <img src="/assets/grow-business-icon-3.png" alt="grow-business-icon" />
      ),
      content: "24/7 near-instant settlement",
    },
  ];
  const lottieTween = useRef<any>();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".business-row",
          start: "top 60%",
        },
      });
      tl.fromTo(
        ".business-row",
        {
          x: 50,
          opacity: 0,
        },
        {
          duration: 1.5,
          x: 0,
          opacity: 1,
          stagger: 0.5,
          ease: "power4.out",
        }
      );
    });
    if (!lottieTween.current) {
      lottieTween.current = LottieScrollTrigger({
        trigger: ".business",
        target: ".lottie-container1",
        path: "/GrowBusiness.json",
        speed: "medium",
        start: "top 40%",
        scrub: false,
        toggleActions: "restart none none none",
        // markers: true,
      });
    }
    return () => ctx.revert();
  }, []);

  const renderRow = () => {
    return contentArr.map((item, index) => (
      <div
        key={index}
        className="border-t border-[#EEEEEE] py-6 center justify-start gap-8 business-row"
      >
        {item.image}
        <p className="text-base leading-6 font-semibold text-[#202225]">
          {item.content}
        </p>
      </div>
    ));
  };
  return (
    <Wrapper hasBackground className="2xl:px-0 2xl:pr-16 business">
      <div className="grid grid-cols-5 items-center gap-10">
        {/* <img
          src="/assets/grow-your-business.png"
          alt="grow-business"
          className="lg:col-span-3 col-span-5 mx-auto"
        /> */}
        <div className="lg:col-span-3 col-span-5 mx-auto lottie-container1">
          {/* <Lottie animationData={animationData} loop={false} />; */}
        </div>
        <div className="lg:col-span-2 col-span-5">
          <p className="title lg:mb-0 xl:mb-3 mb-6">
            Grow your business with crypto payments
          </p>
          <p className="subTitle mb-10">
            Without any effort, save a ton of time.
          </p>
          {renderRow()}
        </div>
      </div>
    </Wrapper>
  );
};

export default GrowYourBusiness;
