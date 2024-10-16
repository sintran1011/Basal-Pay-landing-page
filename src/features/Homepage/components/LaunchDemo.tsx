import BaseButton from "@/features/components/BaseButton";
import Wrapper from "@/features/components/Wrapper";

const LaunchDemo = () => {
  const textCss = "font-medium text-[22px] leading-8 text-[#787F84]";
  return (
    <Wrapper>
      <div className="grid justify-start items-center gap-10 grid-cols-2">
        <div className="flex flex-col gap-6 lg:col-span-1 col-span-2">
          <p className={textCss}>Expand your businesses reach to</p>
          <p className="xl:text-[128px] xl:leading-[160px] text-[90px] leading-[100px] text-[#202225] font-medium">
            560M+
          </p>
          <p className={textCss}>Digital currency users globally.</p>
          <BaseButton type="primary">Launch a demo</BaseButton>
        </div>
        <img
          className="xl:size-[412px] size-full lg:col-span-1 col-span-2"
          src="https://picsum.photos/500"
          alt="demo"
        />
      </div>
    </Wrapper>
  );
};

export default LaunchDemo;
