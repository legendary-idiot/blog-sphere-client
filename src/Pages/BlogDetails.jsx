import { useLoaderData } from "react-router-dom";
import Comments from "../Components/Comments";

const BlogDetails = () => {
  const blog = useLoaderData();
  const {
    postCover,
    postTitle,
    _id,
    publishingDate,
    postDescription,
    email,
    username,
  } = blog;

  return (
    <div className="w-10/12 mx-auto">
      <div className="mt-10 mb-16 space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold">
          <p>{username}</p>
          <p className="text-gray-300">on {publishingDate}</p>
        </div>
        <h2 className="text-3xl font-extrabold">{postTitle}</h2>
        <img src={postCover} alt={postTitle} className="rounded-md w-full" />
        <pre className="text-wrap text-justify">{postDescription}</pre>
      </div>
      <Comments authorEmail={email} blogId={_id} />
    </div>
  );
};

export default BlogDetails;
