const Upgrade = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto text-center relative">
      <p className="title max-w-[782px] mx-auto">
        Upgrade the way manage your payments today
      </p>
      <div className="xl:h-[340px] h-[200px]" />
      <div className="grid grid-cols-3 xl:h-[300px] h-[200px]">
        <div className="col-span-2 bg-[#B6DFEC]" />
        <div className="col-span-1 bg-[#2377FC]" />
      </div>
      <img
        alt="upgrade"
        src="https://picsum.photos/500"
        className="xl:w-[300px] w-[200px] xl:h-[350px] h-[200px] center-absolute"
      />
    </div>
  );
};

export default Upgrade;
