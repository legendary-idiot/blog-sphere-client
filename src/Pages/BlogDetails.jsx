import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  const {
    postCover,
    postTitle,
    category,
    publishingDate,
    postDescription,
    email,
    username,
  } = blog;

  return (
    <div className="w-11/12 mx-auto my-12 space-y-4">
      <div className="flex items-center gap-2 text-sm font-bold">
        <p>{username}</p>
        <p className="text-gray-300">on {publishingDate}</p>
      </div>
      <h2 className="text-3xl font-extrabold">{postTitle}</h2>
      <img src={postCover} alt={postTitle} className="rounded-md" />
      <pre className="text-wrap text-justify">{postDescription}</pre>
    </div>
  );
};

export default BlogDetails;
