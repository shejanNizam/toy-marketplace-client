import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/my_toys?email=${user?.email}`)
      .then((data) => {
        setMyToys(data.data);
      });
  }, []);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:7000/my_toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>My Toys | Toy Cars</title>
      </Helmet>
      <h3 className="text-center text-3xl font-bold ">
        My Toys: <span className="text-orange-400">{myToys.length}</span> Pcs
      </h3>
      <div className="overflow-x-auto  m-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Delete</th>
              <th className="text-lg">My Toys & Details </th>
              <th className="text-lg">Seller Information</th>
              <th className="text-lg">Details </th>
              <th className="text-lg">Prices</th>
              <th className="text-lg"> Updates </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
