import React from "react";

const MyToysRow = ({ myToy, handleDelete }) => {
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
  } = myToy;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
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
          </div>
        </div>
      </td>
      <td>
        {seller_name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        <span className="font-bold">Details:</span> {details}
      </td>
      <td>
        <span className="font-bold">Price:</span> ${price}
      </td>
      <th>
        <button className="btn btn-ghost border-gray-700 btn-xs">update</button>
      </th>
    </tr>
  );
};

export default MyToysRow;
