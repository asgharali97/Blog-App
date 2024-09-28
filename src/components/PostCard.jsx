import React from "react";
import { Link } from "react-router-dom";
import authService from "../appWrite/config";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <>
      <Link to={`/post/${$id}`}>
      <p></p>
        <div className="max-w-sm p-4 rounded-xl overflow-hidden shadow-lg  bg-[#2d2d2d]">
          <div className="relative h-48 w-full">
            <img
              src={authService.getFilePreview(featuredImage)}
              alt={title}
              className="object-cover h-full w-full rounded-md"
            />
          </div>
          <div className="py-4 w-full">
            <div className="font-bold text-xl mb-2 text-[#cecece]">{title}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;

