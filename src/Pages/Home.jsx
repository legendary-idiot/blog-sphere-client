import Banner from "../Components/Banner";
import TopicTags from "../Components/TopicTags";
import Newsletter from "./../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopicTags />
      <h3>All News</h3>
      <Newsletter />
    </div>
  );
};

export default Home;
