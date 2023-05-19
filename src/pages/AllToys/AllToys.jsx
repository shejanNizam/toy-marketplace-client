import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "./SingleToyCard";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div className="text-center">
      <h3 className="text-3xl"> total toys : {allToys.length} </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {allToys.map((singleToy) => (
          <SingleToyCard
            key={singleToy._id}
            singleToy={singleToy}
          ></SingleToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
