import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  hasBackground?: boolean;
  hasDivine?: boolean;
  className?: string;
}

const Wrapper = (props: IProps) => {
  const {
    children,
    hasBackground = false,
    className = "",
    hasDivine = false,
  } = props;
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto relative ${
        hasBackground ? "bg-[#F5F6F7]" : ""
      } xl:px-[128px] xl:pt-[80px] lg:py-12 lg:px-10 py-10 px-6 ${className}`}
    >
      {children}
      {hasDivine ? (
        <div className="border-b-[2px] border-[#EEEEEE] w-[85%] min-w-[375px] bottom-0 left-1/2 -translate-x-1/2 absolute" />
      ) : null}
    </div>
  );
};

export default Wrapper;
