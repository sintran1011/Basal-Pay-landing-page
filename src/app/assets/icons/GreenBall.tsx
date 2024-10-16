import React from "react";

interface IProps {
  className: string;
}

const GreenBall = (props: IProps) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="65"
      viewBox="0 0 64 65"
      fill="none"
      className={className}
    >
      <circle cx="32" cy="32.75" r="32" fill="url(#paint0_radial_833_13856)" />
      <circle
        cx="32"
        cy="32.75"
        r="32"
        fill="url(#paint1_radial_833_13856)"
        fill-opacity="0.2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_833_13856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(53.4354 59.5443) rotate(-129.944) scale(65.1042)"
        >
          <stop offset="0.436111" stop-color="#27A867" />
          <stop offset="1" stop-color="#33E68C" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_833_13856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.33971 10.7022) rotate(44.2205) scale(31.8329)"
        >
          <stop stop-color="white" />
          <stop offset="0.424767" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GreenBall;
