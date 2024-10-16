import BasalpayIcon from "@/app/assets/icons/BasalpayIcon";
import Wrapper from "@/features/components/Wrapper";

const Summary = () => {
  const textCss = "font-semibold text-sm leading-6";
  const footerMenu = [
    {
      title: "Product",
      menu: ["Features", "Pricing", "Download"],
    },
    {
      title: "Company",
      menu: ["About", "Blog", "Contact", "Sign up"],
    },
    {
      title: "Community",
      menu: ["Help", "Discord", "Twitter", "Linked in"],
    },
    {
      title: (
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <BasalpayIcon />
          </div>
          <p className={`text-[#787F84] ${textCss}`}>
            The Real-time & powerful 3D design for web.
          </p>
        </div>
      ),
    },
  ];

  const renderCard = () => {
    return footerMenu.map((item, i) => {
      return item.menu && item.menu.length > 0 ? (
        <div
          key={i}
          className={`xl:py-12 xl:px-16 lg:p-8 p-4 border-[#EEEEEE] lg:col-span-2 md:col-span-4 col-span-8 border-b lg:border-b-0 ${
            i === 2 ? "md:border-b-0" : null
          } lg:border-r`}
        >
          <p className={`text-[#202225] mb-6 ${textCss}`}>{item.title}</p>
          <div className="flex lg:flex-col flex-row lg:gap-6 gap-10">
            {item.menu?.map((x) => (
              <p key={x} className={`text-[#787F84] font-medium ${textCss}`}>
                {x}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="xl:py-12 xl:px-16 p-4 lg:p-8 lg:col-span-2 md:col-span-4 col-span-8">
          {item.title}
        </div>
      );
    });
  };

  return (
    <Wrapper className="!px-0 !py-0">
      <div className="border-[#EEEEEE] grid grid-cols-8 border-t xl:border-x">
        {renderCard()}
      </div>
    </Wrapper>
  );
};

export default Summary;
