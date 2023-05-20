import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  // console.log(myToys);

  const url = `http://localhost:7000/my_toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you watt to delete");
    if (proceed) {
      fetch(`http://localhost:7000/my_toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  const handleUpdateToys = (id) => {
    fetch(`http://localhost:7000/my_toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update
          const remaining = myToys.filter((toy) => toy._id !== id);
          const updated = myToys.find((toy) => toy._id === id);
          updated.status = "confirm";
          const newToys = [updated, ...remaining];
          setMyToys(newToys);
        }
      });
  };

  return (
    <div>
      <h3 className="text-center text-4xl">MyToys total: {myToys.length} </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>All Toys & Details </th>
              <th>Seller Information</th>
              <th>Details </th>
              <th>Prices</th>
              <th> Updates </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
                handleUpdateToys={handleUpdateToys}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
