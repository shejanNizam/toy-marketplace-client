import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const toyDetails = useLoaderData();
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
  } = toyDetails || {};
  // console.log(toyDetails);
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">
        Details For : {toy_name}
      </h3>
      <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto my-16">
        <figure>
          <img className="h-72 w-96 rounded-xl p-4" src={photo_url} alt="#" />
        </figure>
        <div className="card-body">
          <p>
            <span className="font-bold">Seller Name:</span> {seller_name}
          </p>
          <p>
            <span className="font-bold">Seller Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-bold">Ratings:</span> {rating}
          </p>
          <p>
            <span className="font-bold">Available Quantity:</span> {quantity}
            Pcs
          </p>
          <p>
            <span className="font-bold">Details:</span> {details}
          </p>
          <div className="card-actions justify-end">
            <Link to="/toys">
              <button className="btn btn-outline">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
