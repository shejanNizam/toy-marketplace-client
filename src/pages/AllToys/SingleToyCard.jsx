import React from "react";
import { Link } from "react-router-dom";

const SingleToyCard = ({ singleToy }) => {
  // console.log(singleToy);
  const {
    _id,
    photo_url,
    seller_name,
    email,
    toy_name,
    category,
    price,
    quantity,
    rating,
    details,
  } = singleToy || {};
  return (
    <>
      <div className="card w-96 glass">
        <figure>
          <img className="h-56" src={photo_url} alt="car!" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title"> {toy_name} </h2>
          <p>
            <span className="font-bold"> Category: </span> {category}
          </p>
          <p>
            <span className="font-bold"> Price: </span> {price}
          </p>
          <p>
            <span className="font-bold"> Available Quantity: </span> {quantity}
          </p>
          <p>
            <span className="font-bold"> Ratings: </span> {rating}
          </p>

          <div className="card-actions justify-end">
            <Link to={`/toys/${_id}`}>
              <button className="btn btn-outline">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleToyCard;
