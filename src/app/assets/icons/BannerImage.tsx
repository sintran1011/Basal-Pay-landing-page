import React from "react";

interface IProps {
  className?: string;
}

const BannerImage = (props: IProps) => {
  const { className = "" } = props;
  return (
    <div
      className={`absolute rounded-full bg-[#EFF0F4] size-[688px] ${className}`}
    >
      <div className="size-full relative">
        <img
          src="assets/banner.png"
          alt="banner"
          className="absolute top-0 left-16"
        />
      </div>
    </div>
  );
};

export default BannerImage;
