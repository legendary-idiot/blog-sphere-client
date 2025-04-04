import { useContext } from "react";

import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { AuthContext } from "../Providers/AuthProvider";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) return children;

  return <Navigate to="/login"></Navigate>;
};

export default Private;
