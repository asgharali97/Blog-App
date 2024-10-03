import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../appWrite/config";

const FeaturedPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    authService.featuredPost().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  return (
    <section className="w-full mt-32 px-32 flex flex-col">
      <h2 className="w-full inline-block font-bold capitalize text-4xl mb-4">
        Recent Posts
      </h2>
      <div className="flex gap-10 mt-10 mb-16">
        {posts.slice(0, 2).map((item, index) => (
          <Link to={`/post/${item.$id}`} key={item.$id}>
            {/* Render the first card design for the first post */}
            {index === 0 ? (
              <article className="relative">
                <div className="w-[45vw] inline-block overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 bottom-0 right-0 w-[45vw] h-[72vh] bg-gradient-to-b from-transparent from-0% to-[#1b1b1be6]/90 rounded-xl z-10"></div>
                  <img
                    className="aspect-[4/3] object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
                    src={authService.getFilePreview(item.featuredImage)}
                    alt={item.title}
                  />
                  <div className="w-[40vw] absolute bottom-0 p-10 z-20">
                    <h2 className="font-bold text-2xl capitalize cursor-pointer">
                      <span className="text-white bg-gradient-to-r from-accent to-accent from-[#7b00d3]/50 to-[#7b00d3]/50 dark:from-[#ffdb4d80]/50 dark:to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                        {item.title}
                      </span>
                    </h2>
                  </div>
                </div>
              </article>
            ) : (
              // Render the second card design for the second post
              <article className="relative">
                <div className="h-full w-full text-light flex ">
                  <div className="flex h-[25vh] w-[20vw] rounded-xl overflow-hidden">
                    <img
                      className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                      src={authService.getFilePreview(item.featuredImage)}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-full ml-4">
                    <h3 className="font-semibold capitalize text-lg cursor-pointer mt-4">
                      <span className="bg-gradient-to-r from-accent to-accent from-[#7b00d3]/50 to-[#7b00d3]/50 dark:from-[#ffdb4d80]/50 dark:to-[#ffdb4d80]/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                        {item.title}
                      </span>
                    </h3>
                    <span className="inline-block w-full capitalize text-gray-600 dark:text-gray-400 font-semibold text-base mt-2">
                      {new Date(item.$createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone:"UTC"
                      })}
                    </span>
                  </div>
                </div>
              </article>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPost;
