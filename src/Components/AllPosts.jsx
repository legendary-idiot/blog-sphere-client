import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center xl:col-span-5">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div className="xl:col-span-5">
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
              {post.postDescription.slice(0, 140)}...
            </p>
            <Link to={`/blogs/${post._id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
