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
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Category from "../Pages/Category";

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
        path: "/category/:category",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs?category=${params.category}`),
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
        loader: () => fetch("http://localhost:3000/blogs"),
      },
      {
        path: "/my-blogs",
        element: (
          <Private>
            <MyBlogs />
          </Private>
        ),
      },
      {
        path: "/blogs/:id",
        element: (
          <Private>
            <BlogDetails />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/update-blog/:id",
        element: (
          <Private>
            <UpdateBlog />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/featured-blogs",
        element: (
          <Private>
            <FeaturedBlogs />
          </Private>
        ),
        loader: () => fetch("http://localhost:3000/featured-blogs"),
      },
      {
        path: "/wishlist",
        element: (
          <Private>
            <Wishlist />
          </Private>
        ),
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
