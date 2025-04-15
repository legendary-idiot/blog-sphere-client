import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Category = () => {
  const { category } = useParams();
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleWishlist = (blogId, title, cover, publishDate, author) => {
    if (!user) {
      toast.error("Please login to add to wishlist");
      return;
    }

    const blogData = {
      blogId,
      wishlistUserEmail: user.email,
      postCover: cover,
      title,
      publishDate,
      author,
    };

    fetch("https://server-blog-sphere.vercel.app/wishlists", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then(() => toast.success("Added to wishlist"))
      .catch(() => toast.error("Already in wishlist"));
  };

  return (
    <div className="my-12 w-11/12 mx-auto space-y-6">
      <h2 className="text-2xl font-extrabold">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <h2 className="text-lg text-gray-300 font-bold md:col-span-2 lg:col-span-3">
            Sorry! No posts available under this category!
          </h2>
        ) : (
          blogs.map((blog, idx) => (
            <div key={idx} className="space-y-4 flex flex-col justify-between">
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
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
