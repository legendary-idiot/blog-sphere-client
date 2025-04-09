import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./../Providers/AuthProvider";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";

const AllBlogs = () => {
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleWishlist = (blogId, title, cover, publishDate, author) => {
    const blogData = {
      blogId,
      email: user.email,
      postCover: cover,
      title,
      publishDate,
      author,
    };
    if (!user) {
      toast.error("Please login to add to wishlist");
      return;
    }
    fetch("http://localhost:3000/wishlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  if (blogs.length === 0) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-12">
      {blogs.map((blog, idx) => (
        <div key={idx} className="space-y-4">
          <figure className="relative rounded-md hover:scale-105 hover:transition-transform duration-300">
            <figcaption className="absolute top-2 left-2 px-2 py-1 text-sm uppercase font-medium bg-white text-black rounded-md">
              {blog.category}
            </figcaption>
            <img
              src={blog.postCover}
              alt={blog.postTitle}
              className="rounded-md"
            />
          </figure>

          <div className="flex items-center gap-2 text-sm font-bold">
            <h2>{blog.username}</h2>
            <p className="text-gray-300">on {blog.publishingDate}</p>
          </div>
          <h2 className="text-2xl font-bold">{blog.postTitle}</h2>
          <p className="text-gray-300">
            {blog.postDescription.slice(0, 80)}...
          </p>
          <div className="flex items-center gap-4 ">
            <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
              Details
            </Link>
            <button
              onClick={() =>
                handleWishlist(
                  blog._id,
                  blog.postTitle,
                  blog.postCover,
                  blog.publishingDate,
                  blog.username
                )
              }
              className="btn btn-secondary"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
