import React from "react";

const ReactTabCard = ({ filteredCar }) => {
  console.log(filteredCar);
  const { image, name, price, rating, category } = filteredCar;
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline"> Details </button>
        </div>
      </div>
    </div>
  );
};

export default ReactTabCard;
