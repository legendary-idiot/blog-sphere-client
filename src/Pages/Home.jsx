import About from "../Components/About";
import AllPosts from "../Components/AllPosts";
import Banner from "../Components/Banner";
import TopicTags from "../Components/TopicTags";
import WorkExperience from "../Components/WorkExperience";
import Newsletter from "./../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopicTags />
      <div className="grid grid-cols-1 xl:grid-cols-7 gap-8 w-11/12 mx-auto my-10">
        <AllPosts />
        <div className="xl:col-span-2 space-y-8 ">
          <About />
          <WorkExperience />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
