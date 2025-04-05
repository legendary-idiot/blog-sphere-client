import { createBrowserRouter } from "react-router-dom";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs";
import BlogDetails from "../Pages/BlogDetails";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Private from "../PrivateRoutes/Private";
import ErrorPage from "./../Pages/ErrorPage";
import MyBlogs from "../Pages/MyBlogs";
import UpdateBlog from "../Pages/UpdateBlog";
import Wishlist from "../Pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/my-blogs",
        element: <MyBlogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/update-blog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
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
