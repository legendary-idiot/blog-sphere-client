import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopicTags = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto text-center space-y-4 my-8">
      <h2 className="text-xl font-extrabold">Explore Trending Topics</h2>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {categories?.map((category, idx) => {
          return (
            <Link
              to={`/category/${category.slug}`}
              key={idx}
              className="flex items-center gap-2 bg-[#433d8b] p-4 rounded-md shadow-md hover:bg-[#433d8bba] transition duration-300 ease-in-out"
            >
              <i className={category?.icon} />
              <h2>{category.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopicTags;
