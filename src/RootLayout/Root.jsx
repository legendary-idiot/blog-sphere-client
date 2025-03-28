import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Newsletter />
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
