import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";

const AllToys = () => {
  const [showAll, setShowAll] = useState(false);
  const allToys = useLoaderData();

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h3 className="text-center text-4xl">All Toys total: {allToys.length}</h3>
      <div className="overflow-x-auto m-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>All Toys & Details </th>
              <th>Seller Information</th>
              <th>Details </th>
              <th>Prices</th>
              <th> details </th>
            </tr>
          </thead>
          <tbody>
            {allToys.slice(0, showAll ? 1000 : 20).map((singleToy) => (
              <SingleToyCard
                key={singleToy._id}
                singleToy={singleToy}
              ></SingleToyCard>
            ))}
          </tbody>
        </table>
      </div>
      {!showAll && (
        <span onClick={handleShowAll} className="text-center">
          <button className="btn btn-outline">See All</button>
        </span>
      )}
    </div>
  );
};

export default AllToys;
