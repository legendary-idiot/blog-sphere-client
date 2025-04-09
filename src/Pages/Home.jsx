import AllPosts from "../Components/AllPosts";
import Banner from "../Components/Banner";
import TopicTags from "../Components/TopicTags";
import Newsletter from "./../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopicTags />
      <AllPosts />
      <Newsletter />
    </div>
  );
};

export default Home;
