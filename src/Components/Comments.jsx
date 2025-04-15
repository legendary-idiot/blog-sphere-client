import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Comments = ({ authorEmail, blogId }) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = (blogId) => {
    fetch(`https://server-blog-sphere.vercel.app/comments/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchComments(blogId);
  }, [blogId]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    // Verify Author or Different User
    if (authorEmail === user?.email) {
      toast.error("Author is not allowed to comment!");
      e.target.reset();
      return;
    }
    const commentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const { data } = await axios.post(
      "https://server-blog-sphere.vercel.app/comments",
      {
        blogId,
        comment,
        commentDate,
        commentEmail: user?.email,
        commentUserName: user.displayName,
        commentUserPhoto: user.photoURL,
      },
      { withCredentials: true }
    );
    if (data.acknowledged) {
      e.target.reset();
      toast.success("Comment Added Successfully!");
      fetchComments(blogId);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center my-2">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div className="space-y-4 my-8">
      <h2 className="text-xl font-extrabold">Comments</h2>
      <form
        onSubmit={handleSubmitComment}
        className="space-y-4 flex flex-col items-end"
      >
        <textarea
          name="comment"
          className="textarea h-52 w-full text-sm"
          placeholder="Write your comment"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-fit">
          Submit
        </button>
      </form>
      {/* Comment Details */}
      <h2 className="font-extrabold text-xl border-b-2 border-gray-500 pb-4">
        {comments.length} Responses
      </h2>
      <div className="my-12 space-y-4">
        {comments.map((comment, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-start border-b border-gray-600 pb-4"
          >
            <figure className="w-16 shrink-0">
              <img
                src={comment.commentUserPhoto}
                className="object-cover rounded-full"
              />
            </figure>
            <div className="space-y-2 w-full">
              <div className="flex gap-2 items-center justify-between flex-wrap">
                <p className="text-lg font-extrabold">
                  {comment.commentUserName}
                </p>
                <p className="font-light text-gray-200 shrink-0">
                  {comment?.commentDate}
                </p>
              </div>
              <p className="text-gray-400 font-light text-lg">
                {comment.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
