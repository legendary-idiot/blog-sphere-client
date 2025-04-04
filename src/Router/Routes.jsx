import { createBrowserRouter } from "react-router-dom";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs";
import BlogDetails from "../Pages/BlogDetails";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Private from "../PrivateRoutes/Private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-blog",
        element: (
          <Private>
            <AddBlog />
          </Private>
        ),
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
        loader: () => fetch("http://localhost:3000/blogs"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
