"use client"
import { ReactNode } from "react";

interface IButton {
  type?: "primary" | "secondary";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const BaseButton = (props: IButton) => {
  const {
    children,
    type = "secondary",
    className = "",
    onClick = () => {},
  } = props;
  const textCss = {
    primary: "bg-[#2377FC] text-[#FCFDFE]",
    secondary: "bg-[#EEEEEE] text-[#17181A]",
  };
  return (
    <div
      onClick={onClick}
      className={`rounded-[48px] w-fit py-3 px-6 font-semibold h-12 cursor-pointer hover:opacity-60 ${textCss[type]} ${className} center`}
    >
      <p>{children}</p>
    </div>
  );
};

export default BaseButton;
