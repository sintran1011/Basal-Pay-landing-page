import React from "react";

interface IProps {
  className: string;
}

const BlueBall = (props: IProps) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      className={className}
    >
      <circle cx="20" cy="20.75" r="20" fill="url(#paint0_radial_833_13854)" />
      <circle
        cx="20"
        cy="20.75"
        r="20"
        fill="url(#paint1_radial_833_13854)"
        fill-opacity="0.2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_833_13854"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.3971 37.4964) rotate(-129.944) scale(40.6901)"
        >
          <stop offset="0.436111" stop-color="#136FFF" />
          <stop offset="1" stop-color="#47BDFF" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_833_13854"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.83732 6.9701) rotate(44.2205) scale(19.8956)"
        >
          <stop stop-color="white" />
          <stop offset="0.424767" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BlueBall;
