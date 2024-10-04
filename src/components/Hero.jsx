import React from "react";
const Hero = () => {
  return (
    <>
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-[#1b1b1be6]/60 rounded-3xl z-0 "></div>
        <img
          className="w-full h-full object-center object-cover rounded-3xl "
          src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcSet=""
        />
        <div className="w-full h-[100vh] px-14 py-6 flex flex-col items-start justify-center z-0 absolute">
          <h1 className="font-bold text-4xl capitalize cursor-pointer">
            <span className="text-white bg-gradient-to-r from-accent to-accent from-[#7b00d3]/50 to-[#7b00d3]/50 dark:from-[#ffdb4d80]/50  dark:to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
              Building Progressive Web Apps
            </span>
          </h1>
          <p className="mt-4 w-[70%] text-xl text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            sunt vitae vero sequi! Iste, illum error quisquam consequuntur
            deleniti dolore?
          </p>
        </div>
      </article>
    </>
  );
};

export default Hero;
