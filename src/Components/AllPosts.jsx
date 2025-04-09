import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      {[...posts].slice(0, 10).map((post) => (
        <div
          key={post._id}
          className="border-b border-gray-700 py-4 my-4 shadow-md lg:flex lg:gap-4 space-y-4 lg:space-y-0"
        >
          <img
            src={post.postCover}
            alt={post.postTitle}
            className="max-w-full lg:w-96 min-h-36 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <p>
              {post.username}{" "}
              <span className="text-stone-400">on {post.publishingDate}</span>
            </p>
            <h2 className="text-xl font-bold">{post.postTitle}</h2>
            <p className="text-gray-300">
              {post.postDescription.slice(0, 150)}...
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
