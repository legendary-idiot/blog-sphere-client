import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const data = useLoaderData();
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

    fetch(`https://server-blog-sphere.vercel.app/blogs/${data._id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then(() => {
        e.target.reset();
        Swal.fire({
          title: "Post Updated Successfully!",
          icon: "success",
        });
        navigate("/all-blogs");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="my-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Update Your Blog</h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Revise and refine your content with ease! Make changes to your
          published posts effortlessly. Edit, enhance, and keep your audience
          engaged with fresh updates.
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
              defaultValue={data?.postTitle}
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
              defaultValue={data?.postCover}
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
              defaultValue={data?.category}
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
              defaultValue={data?.postDescription}
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
              defaultValue={data?.email}
              className="input input-bordered w-full focus-within:outline-none"
              required
              disabled
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
              defaultValue={data?.username}
              className="input input-bordered w-full focus-within:outline-none"
              required
              disabled
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Update Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
