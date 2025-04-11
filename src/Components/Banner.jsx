import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/featured-blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center my-2">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div className="slider-container w-10/12 mx-auto">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog._id} className="relative">
            <img
              className="w-full h-96 object-cover"
              src={blog.postCover}
              alt="Cover Image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex items-center">
              <div className="p-4 sm:p-10 space-y-4">
                <p className="text-wrap">
                  {blog.username}{" "}
                  <span className="text-gray-400">
                    on {blog.publishingDate}
                  </span>
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold">
                  {blog.postTitle}
                </h2>
                <Link to={`/blogs/${blog._id}`} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
