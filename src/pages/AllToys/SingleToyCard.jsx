import React from "react";

const SingleToyCard = ({ singleToy }) => {
  // console.log(singleToy);
  // https://i.ibb.co/Rhy8M7z/sports-car1.jpg
  // https://i.ibb.co/bmZq6QZ/sports-car2.jpg

  // https://i.ibb.co/YQCSpwy/regular-car1.jpg
  // https://i.ibb.co/7gG56Wc/regular-car2.webp

  // https://i.ibb.co/CKhz8zq/police-car1.jpg
  // https://i.ibb.co/TrCrsC5/police-car2.webp
  const {
    _id,
    photo_url,
    seller_name,
    seller_email,
    toy_name,
    category,
    price,
    quantity,
    rating,
    details,
  } = singleToy;
  return (
    <div>
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
            <button className="btn btn-outline">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyCard;
