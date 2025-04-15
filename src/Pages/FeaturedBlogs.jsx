import { Link, useLoaderData } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";

const FeaturedBlogs = () => {
  const data = useLoaderData();
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
      selector: (row) => row.postTitle,
      wrap: "true",
      grow: 2,
    },
    {
      name: "Author",
      selector: (row) => row.username,
      wrap: "true",
    },
    {
      name: "Published",
      selector: (row) => row.publishingDate,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/blogs/${row._id}`} className="btn btn-primary">
          Details
        </Link>
      ),
    },
  ];
  // Dark Theme for the Table
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

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-center">Featured Blogs</h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Discover standout blog posts handpicked for their creativity, insight,
          and quality. This page showcases the best content from our vibrant
          community of writers. Dive into trending stories and hidden gems
          today!
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

export default FeaturedBlogs;
