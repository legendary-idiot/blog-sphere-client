import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DataTable, { createTheme } from "react-data-table-component";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Link } from "react-router-dom";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const fetchWishlist = useCallback(async () => {
    try {
      const { data } = await axiosSecure.get(
        `/wishlists/?email=${user?.email}`,
        { withCredentials: true }
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [axiosSecure, user?.email]);

  useEffect(() => {
    if (user.email) {
      fetchWishlist();
    }
  }, [user.email, fetchWishlist]);

  // Delete from Wishlist
  const handleDelete = (wishlistID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-blog-sphere.vercel.app/wishlists/${wishlistID}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Blog has been removed from Wishlist",
                icon: "success",
              });
              fetchWishlist();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  // Table Theme
  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#2aa198",
      },
      background: {
        default: "transparent",
      },

      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#102E50",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  const columns = [
    {
      name: "Cover",
      grow: 2,
      selector: (row) => {
        return <img src={row.postCover} />;
      },
    },
    {
      name: "Title",
      grow: 2,
      selector: (row) => {
        return (
          <Link to={`/blogs/${row.blogId}`} className="link-info">
            {row.title}
          </Link>
        );
      },
      wrap: "true",
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      wrap: "true",
    },
    {
      name: "Published",
      selector: (row) => row.publishDate,
      wrap: "true",
      sortable: true,
    },
    {
      name: "Action",
      button: "true",
      cell: (row) => {
        return (
          <button
            className="btn btn-square btn-error"
            title="Remove Item"
            onClick={() => handleDelete(row._id)}
          >
            <FaRegTrashAlt />
          </button>
        );
      },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        fontSize: "18px",
      },
    },
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-center">My Wishlists</h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Keep track of your favorite blog posts and must-read articles! My
          Wishlists page lets you organize and revisit content that inspires,
          informs, and excites you.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={data}
        theme="solarized"
        className="border-2 border-gray-400"
        customStyles={customStyles}
      />
    </div>
  );
};

export default Wishlist;
