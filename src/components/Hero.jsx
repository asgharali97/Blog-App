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
      <section className="w-full mt-32 px-32 flex flex-col">
        <h2 className="w-full inline-block font-bold capitalize text-4xl">
          Featured Posts
        </h2>        
        <div className="flex gap-10 mt-10">
        <article className="relative">
          <div className="w-[45vw] inline-block overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 bottom-0 right-0 w-[45vw] h-[64vh] bg-gradient-to-b from-transparent from-0% to-[#1b1b1be6]/90 rounded-xl z-10 "></div>
           <img className="w-[full] h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300" src="https://images.unsplash.com/photo-1505751104546-4b63c93054b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
           <div className="w-[40vw] absolute bottom-0 p-10 z-20">
           <h2 className="font-bold text-2xl capitalize cursor-pointer">
            <span className="bg-gradient-to-r from-accent to-accent from-[#ffdb4d80]/50  to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
              Productivity for developers increase your focus by theses tips 
            </span>
          </h2>
           </div>
          </div>
        </article>
        <article className="relative">
        <div className="h-full w-full text-light flex">
        <div className="flex h-[25vh] w-[20vw] rounded-xl overflow-hidden">
        <img className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300" src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
        </div>
        <div className="w-full ml-4">
        <h3 className="font-semibold capitalize text-lg cursor-pointer">
        <span className="bg-gradient-to-r from-accent to-accent from-[#ffdb4d80]/50  to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
        Bring the inance code quality for anyone just do these things and see magic of code quality
        </span>
        </h3>
        </div>
        </div>
        </article>
        </div>
      </section>
    </>
  );
};

export default Hero;
