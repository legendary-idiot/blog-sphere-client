import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="bg-base-200">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Root;
