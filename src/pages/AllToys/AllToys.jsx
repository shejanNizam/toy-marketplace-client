import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div>
      <h3 className="text-center text-4xl">MyToys total: {allToys.length} </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>All Toys & Details </th>
              <th>Seller Information</th>
              <th>Details </th>
              <th>Prices</th>
              <th> details </th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((singleToy) => (
              <SingleToyCard
                key={singleToy._id}
                singleToy={singleToy}
              ></SingleToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
