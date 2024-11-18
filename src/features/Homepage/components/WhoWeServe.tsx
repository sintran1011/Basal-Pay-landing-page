"use client";
import Wrapper from "@/features/components/Wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhoWeServe = () => {
  const contentArr = [
    {
      src: "/assets/who-we-serve1.png",
      text: "Service providers payouts",
    },
    {
      src: "/assets/who-we-serve2.png",
      text: "Service providers payouts",
    },
    {
      src: "/assets/who-we-serve3.png",
      text: "Service providers payouts",
    },
    {
      src: "/assets/who-we-serve4.png",
      text: "Service providers payouts",
    },
    {
      src: "/assets/who-we-serve5.png",
      text: "Service providers payouts",
    },
    {
      src: "/assets/who-we-serve6.png",
      text: "Service providers payouts",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card1",
          start: "top center",
          // markers: true,
          // scrub: true,
          // toggleActions: "restart none reserve none",
        },
      });
      tl.fromTo(
        ".card1",
        {
          y: 50,
          opacity: 0,
        },
        {
          duration: 2,
          y: -20,
          opacity: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const renderCard = () => {
    return contentArr.map((item, index) => (
      <div
        key={index}
        className="xl:col-span-2 md:col-span-3 col-span-6 rounded-2xl overflow-hidden h-[388px] card1"
      >
        <img alt="test" src={item.src} className="size-full" />
      </div>
    ));
  };

  return (
    <Wrapper hasBackground>
      <div className="text-center">
        <p className="title">Who We Serve</p>
        <p className="subTitle">
          Explore how we can drive growth for your business.
        </p>
        <div className="mt-10 grid grid-cols-6 gap-3">{renderCard()}</div>
      </div>
    </Wrapper>
  );
};

export default WhoWeServe;
