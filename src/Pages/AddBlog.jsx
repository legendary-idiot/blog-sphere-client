import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./../Providers/AuthProvider";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const postCover = e.target.postCover.value;
    const postTitle = e.target.postTitle.value;
    const category = e.target.category.value;
    const publishingDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const postDescription = e.target.postDescription.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const postData = {
      postCover,
      postTitle,
      category,
      publishingDate,
      postDescription,
      email,
      username,
    };

    fetch("https://server-blog-sphere.vercel.app/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        Swal.fire({
          title: "Post Added Successfully!",
          icon: "success",
        });
        navigate("/all-blogs");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="my-12">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Add Post to the Blog</h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Share your stories and insights with the world! Craft your blog post,
          add your unique touch, and captivate your audience. Start sharing
          today!
        </p>
      </div>

      <div className="card bg-base-100 mx-4 sm:w-9/12 shrink-0 shadow border border-indigo-300 my-8 sm:mx-auto">
        <form className="card-body space-y-3" onSubmit={formHandler}>
          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Post Title</span>
            </label>
            <input
              type="text"
              name="postTitle"
              placeholder="Enter Post Title"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Post Cover URL</span>
            </label>
            <input
              type="text"
              name="postCover"
              placeholder="Enter Post Cover Image URL"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue="Technology"
              name="category"
              className="select focus-within:outline-none w-full"
            >
              <option>Technology</option>
              <option>Travel</option>
              <option>Sport</option>
              <option>Management</option>
              <option>Trends</option>
              <option>Startups</option>
              <option>News</option>
            </select>
          </div>

          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="postDescription"
              className="textarea h-[600px] w-full focus-within:outline-none"
              placeholder="Write Your Post Here"
            ></textarea>
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full focus-within:outline-none"
              required
              disabled={!!user}
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-base-content">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              defaultValue={user?.displayName}
              className="input input-bordered w-full focus-within:outline-none"
              required
              disabled={!!user}
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Submit Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
