import BasalpayIcon from "@/app/assets/icons/BasalpayIcon";

const Header = () => {
  return (
    <div className="w-full bg-[#F5F6F7] max-w-[1440px] mx-auto">
      <div className="py-6 px-10 flex justify-between border-b-[2px] border-[#EEEEEE]">
        <BasalpayIcon/>
        {/* <div className="center justify-end gap-4">
          <div className="rounded-[48px] bg-[#EEEEEE] text-[#17181A] center w-[95px] h-12">
            <p className="font-semibold text-sm leading-6">Sign in</p>
          </div>
          <BurgerIcon />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
