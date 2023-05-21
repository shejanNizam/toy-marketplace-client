import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaAngleRight } from "react-icons/fa";
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
      <Helmet>
        <title>All Toys | Toy Cars</title>
      </Helmet>
      <h3 className="text-center text-3xl font-bold ">
        All Toys: <span className="text-orange-400">{allToys.length}</span> Pcs
      </h3>
      <div className="overflow-x-auto m-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">All Toys & Details </th>
              <th className="text-lg">Seller Information</th>
              <th className="text-lg">Prices</th>
              <th className="text-lg"> details </th>
            </tr>
          </thead>
          <tbody>
            {allToys?.slice(0, showAll ? 1000 : 10).map((singleToy) => (
              <SingleToyCard
                key={singleToy._id}
                singleToy={singleToy}
              ></SingleToyCard>
            ))}
          </tbody>
        </table>
        {!showAll && (
          <div onClick={handleShowAll} className="text-right">
            <button className="btn btn-outline btn-sm">
              See All <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
