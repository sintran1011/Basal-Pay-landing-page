"use client"
import useLenis from "@/utils/hooks/useLenis";
import Banner from "./components/Banner";
import FreeConsultation from "./components/FreeConsultation";
import GrowYourBusiness from "./components/GrowYourBusiness";
import LaunchDemo from "./components/LaunchDemo";
import Payment from "./components/Payment";
import Solutions from "./components/Solutions";
import Summary from "./components/Summary";
import Upgrade from "./components/Upgrade";
import WhoWeServe from "./components/WhoWeServe";

const Homepage = () => {
  useLenis();
  return (
    <div>
      <Banner />
      <Payment />
      <Solutions />
      <GrowYourBusiness />
      <LaunchDemo />
      <Upgrade/>
      <WhoWeServe/>
      <FreeConsultation/>
      <Summary/>
    </div>
  );
};

export default Homepage;
