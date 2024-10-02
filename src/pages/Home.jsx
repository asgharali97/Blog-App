import React, { useState, useEffect } from "react";
import authService from "../appWrite/config";
import { Container, PostCard ,FeaturedPost,Hero } from "../components";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    authService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="py-8 w-full">
        <Container>
          <div className="flex flex-wrap">
            <div className="p2 w-full">
              <h1 className="text-2xl font-bold">Login To Read Post</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-ful">
      <Hero/>
      <FeaturedPost/>
      <Container>
        <div className="flex flex-wrap mt-32">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-[32%]">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
