import React from "react";
const Hero = () => {
  return (
    <>
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-[#1b1b1be6]/90 rounded-3xl z-0 "></div>
        <img
          className="w-full h-full object-center object-cover rounded-3xl "
          src="https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fcharlesdeluvio-cZr2sgaxy3Q-unsplash.jpg&w=1920&q=75"
          alt=""
          srcset=""
        />
        <div className="w-full h-[100vh] px-14 py-6 flex flex-col items-start justify-center z-0 absolute">
          <h1 className="font-bold text-4xl capitalize cursor-pointer">
            <span className="bg-gradient-to-r from-accent to-accent from-[#ffdb4d80]/50  to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
              Building Progressive Web Apps
            </span>
          </h1>
          <p className="mt-4 w-[70%] text-xl">
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
