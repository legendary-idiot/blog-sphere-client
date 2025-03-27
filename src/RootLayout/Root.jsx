import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>Header</h2>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default Root;
