import React from "react";
import { Link } from "react-router-dom";
import authService from "../appWrite/config";

const PostCard = ({ $id, title, featuredImage,$createdAt }) => {
  return (
    <>
      <div className="flex gap-4 mt-16 px-4">
        <article className="relative">
          <div className="flex items-center text-white ">
            <Link
              to={`/post/${$id}`}
              className="h-full rounded-xl overflow-hidden"
            >
              <img
                src={authService.getFilePreview(featuredImage)}
                className="aspect-[4/3] w-[24vw] h-full object-cover object-center  hover:scale-105 transition-all ease duration-300 rounded-xl"
                alt={title}
                srcset=""
              />

              <div className="flex flex-col w-full mt-4">
                <div className="inline-block my-1">
                  <h2 className="font-semibold capitalize text-lg">
                    <span className="bg-gradient-to-r from-accent/50 to-accent/50  from-[#ffdb4d80]/50 to-[#ffdb4d80]50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                    {title}
                    </span>
                  </h2>
                  <span className="inline-block w-full capitalize text-gray-400 font-semibold text-base mt-2">
                      {new Date($createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone:"UTC"
                      })}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default PostCard;
