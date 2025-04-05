import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DataTable from "react-data-table-component";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
  return (
    <div>
      <h2>All The Wishlisted Item Will Be Displayed Here</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Wishlist;
