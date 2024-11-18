"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { useLayoutEffect } from "react";

const Upgrade = () => {
  const arr = ["Convenience", "Safe", "Fast"];
  useLayoutEffect(() => {
    "(min-width: 800px)";
    const mm = gsap.matchMedia();
    const defaultFrom = { opacity: 0, x: 0, y: 0 };
    const defaultTo = {
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".upgrade",
        start: "center center",
        toggleActions: "restart none reverse none",
      },
    };
    mm.add("(min-width: 500px)", () => {
      gsap.fromTo(".up-0", defaultFrom, { ...defaultTo, x: 200, y: -100 });
      gsap.fromTo(".up-1", defaultFrom, {
        ...defaultTo,
        x: -170,
        y: 50,
        delay: 0.5,
      });
      gsap.fromTo(".up-2", defaultFrom, {
        ...defaultTo,
        x: 170,
        y: 150,
        delay: 0.75,
      });
    });
    mm.add("(max-width: 426px)", () => {
      gsap.fromTo(".up-0", defaultFrom, { ...defaultTo, x: 100, y: -70 });
      gsap.fromTo(".up-1", defaultFrom, {
        ...defaultTo,
        x: -120,
        y: 50,
        delay: 0.5,
      });
      gsap.fromTo(".up-2", defaultFrom, {
        ...defaultTo,
        x: 120,
        y: 190,
        delay: 0.75,
      });
    });
    return () => {
      mm.revert();
    };
  }, []);
  return (
    <div className="w-full max-w-[1440px] lg:h-auto h-[700px] mx-auto text-center relative upgrade">
      <p className="title max-w-[782px] mx-auto text-center">
        Upgrade the way manage your payments today
      </p>
      <div className="xl:h-[340px] h-[200px]" />
      <div className="grid grid-cols-3 xl:h-[300px] h-[430px]">
        <div className="col-span-2 bg-[#F0F0F0]" />
        <div className="col-span-1 bg-[#F0F0F0]" />
      </div>
      <Image
        alt="upgrade"
        src="/assets/upgrade.png"
        className="center-absolute top-[60%] text-[#2377FC]"
        width={256}
        height={554}
      />
      {arr.map((i, idx) => (
        <p
          key={idx}
          className={`min-w-[120px] py-2 px-4 font-medium text-[24px] leading-9 shadow-xl text-[#2377FC] rounded-[64px] bg-[#F5F6F7] text-center up w-fit center-absolute up-${idx}`}
        >
          {i}
        </p>
      ))}
    </div>
  );
};

export default Upgrade;
