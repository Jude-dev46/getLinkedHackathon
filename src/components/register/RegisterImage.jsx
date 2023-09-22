import React from "react";

import HeroImage from "../../assets/rsz_1hero-image.png";
import MobileHero from "../../assets/mobile-hero.png";
import Star from "../../assets/star.png";
import StarPu from "../../assets/star-pu.png";

const RegisterImage = () => {
  return (
    <div className="flex justify-center mt-24 lg:mt-0 relative">
      <div className="bg-mobile-purple w-1/2 absolute bottom-10 lg:hidden"></div>
      <img
        src={HeroImage}
        alt="3D graphic designer"
        className="hidden lg:block -mt-10"
      />
      <img src={MobileHero} alt="3D graphic designer" className="lg:hidden" />
      <img
        src={Star}
        alt="A shining star"
        className="hidden lg:block absolute top-0 left-20"
      />
      <img
        src={Star}
        alt="A shining star"
        className="hidden lg:block absolute bottom-8 left-20"
      />
      <img
        src={StarPu}
        alt="A shining star"
        className="absolute bottom-12 lg:bottom-32 right-14 lg:right-18"
      />
    </div>
  );
};

export default RegisterImage;
