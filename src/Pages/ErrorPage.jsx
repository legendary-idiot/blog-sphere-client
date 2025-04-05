import { Link } from "react-router-dom";
import img404 from "../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center gap-12   md:flex-row">
      <img
        src={img404}
        alt="404 Error Image"
        className="max-w-[450px] max-h-[450px] w-full rounded-2xl object-cover shadow-2xs border border-indigo-50 mx-auto"
      />

      <div className="lg:w-1/2 p-4">
        <h2 className="text-7xl md:text-9xl font-bold space-y-1  text-orange-200 drop-shadow-md">
          404
        </h2>
        <p className="text-xl sm:text-2xl mt-6 text-stone-200 font-light">
          Aha! You see! You can be wrong!
        </p>
        <p className="text-lg text-stone-300 font-light">
          (or it could be us)...
        </p>
        <p className="mt-3 text-xl sm:text-2xl text-stone-200 font-light">
          ...either way, you should probably
        </p>
        <Link
          to="/"
          className="text-xl sm:text-2xl font-light text-blue-400 hover:underline"
        >
          go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
