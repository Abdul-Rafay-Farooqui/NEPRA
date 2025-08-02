import React from "react";

const Header = ({ title, subtitle, description }) => {
  return (
    <section className="w-full min-h-[250px] h-[300px] xl:h-[250px] flex bg-[#EAF4FC] rubik">
      <div className="h-full w-full bg-cover bg-center text-center bg-no-repeat bg-[url('/images/back.jpg')] flex flex-col lg:flex-row items-stretch relative">
        {/* Gradient overlay as a flex child */}
        <div
          className="w-full h-full bg-gradient-to-b from-black/40 to-black/40 absolute top-0 left-0 z-0 pointer-events-none"
          style={{ position: "absolute" }}
        ></div>
        <div className="relative flex flex-col justify-center w-full lg:w-[90%] px-6 lg:pl-10 py-8 lg:py-0">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h1>
          <h2 className="text-white text-lg sm:text-xl font-medium pt-3 leading-relaxed">
            {subtitle}
          </h2>
          <p className="text-white text-sm sm:text-base pt-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
