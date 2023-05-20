import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:7000/post_toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          alert("Toy added successfully");
        }
      });
  };

  return (
    <div className="m-20 p-20 bg-gray-400 text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Seller Name"
          defaultValue={user?.displayName}
          {...register("seller_name", { required: true })}
        />
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Seller Email"
          defaultValue={user?.email}
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Toy Name"
          {...register("toy_name", { required: true })}
        />
        <select
          className=" m-2 p-2 h-10 w-60 rounded"
          {...register("photo_url", { required: true })}
        >
          <option value="https://i.ibb.co/Rhy8M7z/sports-car1.jpg">
            https://i.ibb.co/Rhy8M7z/sports-car1.jpg
          </option>
          <option value="https://i.ibb.co/bmZq6QZ/sports-car2.jpg">
            https://i.ibb.co/bmZq6QZ/sports-car2.jpg
          </option>
          <option value="https://i.ibb.co/YQCSpwy/regular-car1.jpg">
            https://i.ibb.co/YQCSpwy/regular-car1.jpg
          </option>
          <option value="https://i.ibb.co/7gG56Wc/regular-car2.webp">
            https://i.ibb.co/7gG56Wc/regular-car2.webp
          </option>
          <option value="https://i.ibb.co/CKhz8zq/police-car1.jpg">
            https://i.ibb.co/CKhz8zq/police-car1.jpg
          </option>
          <option value="https://i.ibb.co/TrCrsC5/police-car2.webp">
            https://i.ibb.co/TrCrsC5/police-car2.webp
          </option>
        </select>
        <br />
        <select
          className=" m-2 p-2 h-10 w-60 rounded"
          {...register("category", { required: true })}
        >
          <option value="Regular Cars">Regular Cars</option>
          <option value="Sports Cars">Sports Cars</option>
          <option value="Mini Police Cars">Mini Police Cars</option>
        </select>
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <br />
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Rating"
          {...register("rating", { required: true })}
        />
        <input
          className="m-2 p-2 h-10 w-60 rounded"
          placeholder="Available Quantity"
          {...register("quantity", { required: true })}
        />
        <br />
        <input
          className="m-2 p-2 h-20 w-96 rounded"
          placeholder="Details of Toys "
          {...register("details", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddToys;
