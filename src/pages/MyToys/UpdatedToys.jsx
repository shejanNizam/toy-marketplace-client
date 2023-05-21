import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedToys = () => {
  const updatedToy = useLoaderData();
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
  } = updatedToy || {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:7000/toys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your car has been updated.", "success");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Update Toys | Toy Cars</title>
      </Helmet>
      <div className="m-8 p-20 bg-gray-400 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Seller Name"
            readOnly
            defaultValue={seller_name}
            {...register("seller_name", { required: true })}
          />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Seller Email"
            readOnly
            defaultValue={email}
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Toy Name"
            defaultValue={toy_name}
            {...register("toy_name", { required: true })}
          />
          <select
            className=" m-2 p-2 h-10 w-60 rounded"
            {...register("photo_url", { required: true })}
            defaultValue={photo_url}
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
            defaultValue={category}
          >
            <option value="Regular Cars">Regular Cars</option>
            <option value="Sports Cars">Sports Cars</option>
            <option value="Mini Police Cars">Mini Police Cars</option>
          </select>
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Price"
            defaultValue={price}
            {...register("price", { required: true })}
          />
          <br />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Rating"
            defaultValue={rating}
            {...register("rating", { required: true })}
          />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Available Quantity"
            defaultValue={quantity}
            {...register("quantity", { required: true })}
          />
          <br />
          <input
            className="m-2 p-2 h-20 w-96 rounded"
            placeholder="Details of Toys "
            defaultValue={details}
            {...register("details", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="btn btn-outline btn-sm"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
};

export default UpdatedToys;
