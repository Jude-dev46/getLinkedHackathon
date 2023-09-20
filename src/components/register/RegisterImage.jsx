import React from "react";

import HeroImage from "../../assets/images/hero-image.png";
import MobileHero from "../../assets/images/mobile-hero.png";
import Star from "../../assets/images/star.png";
import StarPu from "../../assets/images/star-pu.png";

const RegisterImage = () => {
  return (
    <div className="flex justify-center mt-24 lg:mt-0 lg:bg-purple-left relative">
      <div className="bg-mobile-purple w-1/2 absolute bottom-10 lg:hidden"></div>
      <img
        src={HeroImage}
        alt="3D graphic designer"
        className="hidden lg:block"
      />
      <img src={MobileHero} alt="3D graphic designer" className="lg:hidden" />
      <img
        src={Star}
        alt="A shining star"
        className="hidden lg:block absolute top-10 left-28"
      />
      <img
        src={Star}
        alt="A shining star"
        className="hidden lg:block absolute bottom-12 left-28"
      />
      <img
        src={StarPu}
        alt="A shining star"
        className="absolute bottom-12 lg:bottom-36 right-14 lg:right-24"
      />
    </div>
  );
};

export default RegisterImage;
