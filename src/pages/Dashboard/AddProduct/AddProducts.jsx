// import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddProducts.css";

const Addpackages = () => {
  const [image, setImage] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')



  let history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(" http://localhost:5000/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        alert("Your order was successful");
        history.push("/dashboard/productlist");
      });

    if (!image) {
      alert("Image firld not emply")
      return
    }
    console.log(data);

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("image", image)
    formData.append("price", price)
    // reset()
  };

  console.log(watch("example"));

  return (
    <div className=" col-sm-8 cls-xs-8 col-10 mx-auto col-md-6 mb-5 col-sm-10 py-4">
      <h2 className="py-3">Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className="form-control mb-3"
          placeholder="Enter your package Name"
          onChange={e => setName(e.target.value)}
        />

        <textarea
          {...register("descrip", { required: true })}
          className="form-control mb-3"
          placeholder="Package Name Description"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          {...register("photoUrl", { required: true })}
          className="form-control mb-3"
          placeholder="Photo Url"
          onChange={e => setImage(e.target.value)}
        />
        <input
          {...register("price", { required: true })}
          className="form-control mb-3"
          placeholder="price"
          onChange={e => setPrice(e.target.value)}
        />
        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}

        <input type="submit" className="btn btn-block w-100 btn-success" />
      </form>
    </div>
  );
};

export default Addpackages;
