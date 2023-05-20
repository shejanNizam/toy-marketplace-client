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
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-40 h-24">
                <img src={photo_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {toy_name} </div>
              <div className=" opacity-50">
                <span className="font-bold"> Category: </span> {category}
              </div>
              <div className="text-sm opacity-50">
                <span className="font-bold"> Available: </span> {quantity} Pcs
              </div>
              <div className="text-sm opacity-50">
                <span className="font-bold"> Ratings: </span> {rating}
              </div>
              <div className="text-sm opacity-50">
                <span className="font-bold"> Details: </span> {details}
              </div>
            </div>
          </div>
        </td>
        <td>
          {seller_name}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>

        <td>
          <span className="font-bold">Price:</span> ${price}
        </td>
        <th>
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-outline btn-xs">Details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default SingleToyCard;
