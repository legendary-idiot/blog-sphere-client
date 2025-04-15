import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const fetchBlogs = useCallback(async () => {
    try {
      const { data } = await axiosSecure.get(`/blogs/user/${user.email}`);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [axiosSecure, user.email]);

  useEffect(() => {
    if (user?.email) {
      fetchBlogs();
    }
  }, [fetchBlogs, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-blog-sphere.vercel.app/blogs/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorEmail: user.email }),
        })
          .then((response) => response.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Blog has been deleted.",
              icon: "success",
            });
            fetchBlogs();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };
  if (loading) return <LoadingSpinner />;
  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Your Blogs
      </h2>
      {blogs.length === 0 ? (
        <h2 className="text-xl font-semibold text-center text-amber-600">
          You've not posted any blogs!
        </h2>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {blogs?.map((blog) => (
            <li key={blog._id} className="list-row">
              <div>
                <img
                  className="size-20 rounded-box object-cover"
                  src={blog.postCover}
                />
              </div>
              <div className="flex-1 flex flex-col justify-around">
                <h2 className="text-base sm:text-lg font-medium hover:text-primary">
                  <Link to={`/blogs/${blog._id}`}>{blog.postTitle}</Link>
                </h2>
                <div className="text-sm uppercase font-semibold opacity-60">
                  Published: {blog.publishingDate}
                </div>
              </div>
              <Link
                to={`/update-blog/${blog._id}`}
                className="btn btn-lg btn-square btn-ghost"
                data-tooltip-content="Update"
                data-tooltip-id="blog-tooltip"
              >
                <FaEdit />
              </Link>
              <button
                onClick={() => handleDelete(blog._id)}
                className="btn btn-lg btn-square btn-ghost"
                data-tooltip-content="Delete"
                data-tooltip-id="blog-tooltip"
              >
                <RiDeleteBinLine />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Tooltip id="blog-tooltip" />
    </div>
  );
};

export default MyBlogs;
