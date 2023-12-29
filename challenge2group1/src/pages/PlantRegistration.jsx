import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { updatePlants } from "../data/https";
import {
  containsDiscount,
  createRegistrationFormSchema,
} from "../form/validation";

const MAX = 5000000;
const MIN = 1000000;

export default function PlantRegistration() {
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createRegistrationFormSchema),
  });

  function hadleChanges(data) {
    containsDiscount(data);
    data.price = data.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    data.label = [data.label, data.type];
    delete data.type;

    console.log(data);
    reset();
    fetchPlants(data);
  }

  function fetchPlants(plant) {
    try {
      updatePlants(plant);
    } catch (error) {
      setError({
        message:
          error.message || "Could not fetch plants, please try again later.",
      });
    }
  }

  return (
    <div className="flex 2xl:justify-center gap-5 bg-gelo overflow-hidden	w-screen">
      <form className=" mx-20 mt-10  " onSubmit={handleSubmit(hadleChanges)}>
        <fieldset>
          <h1 className="text-lunar font-inter font-semibold ">
            Plant registration
          </h1>
          <hr
            className="text-linegray mt-2 mb-5"
            size="10"
            width="100%"
            aling="center"
          />{" "}
          <div>
            <label className="labelstyle" htmlFor="name">
              Plant name
            </label>{" "}
            <br />
            <input
              className="inputstyle"
              id="name"
              {...register("name")}
              type="text"
              placeholder="Echinocereus Cactus"
            />
            <p className="mb-2">
              {errors.name && (
                <span className="errormessage">{errors.name.message}</span>
              )}
              <br />
            </p>
          </div>
          <div>
            <label className="labelstyle" htmlFor="subtitle">
              Plant subtitle
            </label>
            <input
              className="inputstyle"
              id="subtitle"
              {...register("subtitle")}
              type="text"
              placeholder="A majestic addition to your plant collection"
            />
            <p className="mb-2">
              {errors.subtitle && (
                <span className="errormessage">{errors.subtitle.message}</span>
              )}{" "}
              <br />
            </p>
          </div>
          <div>
            <label className="labelstyle" htmlFor="type">
              Plant type
            </label>
            <input
              className="inputstyle"
              id="type"
              {...register("type")}
              type="text"
              placeholder="Cactus"
            />
            <p className="mb-2">
              {" "}
              {errors.type && (
                <span className="errormessage">{errors.type.message}</span>
              )}{" "}
              <br />
            </p>
          </div>
          <div className="flex gap-5 ">
            <div className="w-1/2">
              <label className="labelstyle" htmlFor="price">
                Price
              </label>
              <input
                className="inputstyle"
                id="price"
                {...register("price")}
                type="number"
                placeholder="$139.99"
                step={0.01}
              />
              <p className="mb-2">
                {" "}
                {errors.price && (
                  <span className="errormessage">{errors.price.message}</span>
                )}{" "}
                <br />
              </p>
            </div>
            <div className="w-1/2">
              <label className="labelstyle" htmlFor="discountPercentage">
                Discount percentage
              </label>
              <input
                className=" inputstyle "
                id="discountPercentage"
                {...register("discountPercentage")}
                type="number"
                placeholder="20%"
              />
              <p className="mb-2">
                {" "}
                {errors.discountPercentage && (
                  <span className="errormessage">
                    {errors.discountPercentage.message}
                  </span>
                )}{" "}
                <br />
              </p>
            </div>
          </div>
          <div className=" flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="">
              Label:
            </label>
            <div className=" flex flex-row gap-3">
              <div>
                <input
                  className=" h-4 w-4 mr-1"
                  id="indoor"
                  {...register("label")}
                  type="radio"
                  value="indoor"
                />
                <label className="labelstyle" htmlFor="indoor">
                  Indoor
                </label>
              </div>
              <div>
                <input
                  className=" h-4 w-4 mr-1"
                  id="outdoor"
                  {...register("label")}
                  type="radio"
                  value="outdoor"
                />
                <label className="labelstyle" htmlFor="outdoor">
                  Outdoor
                </label>
              </div>
            </div>
            <p className="mb-2">
              {" "}
              {errors.label && (
                <span className="errormessage">{errors.label.message}</span>
              )}{" "}
              <br />
            </p>
          </div>
          <div>
            <label className="labelstyle" htmlFor="features">
              Features
            </label>
            <textarea
              className=" inputstyle h-[125px]"
              {...register("features")}
              id="features"
              cols="30"
              rows="10"
              placeholder="Species: Echinocereus..."
            ></textarea>
            <p className="mb-2">
              {" "}
              {errors.features && (
                <span className="errormessage">{errors.features.message}</span>
              )}{" "}
              <br />
            </p>
          </div>
          <div>
            <label className="labelstyle" htmlFor="description">
              Description
            </label>
            <textarea
              className=" inputstyle h-[125px]"
              {...register("description")}
              id="description"
              cols="30"
              rows="10"
              placeholder="Ladyfinger cactus..."
            ></textarea>
            <p className="mb-2">
              {errors.description && (
                <span className="errormessage">
                  {errors.description.message}
                </span>
              )}{" "}
              <br />
            </p>
          </div>
        </fieldset>

        <button
          className="flex mx-auto justify-center bg-lunar text-white  py-3 mb-20 mt-5 md:px-28 px-14 lg:px-56"
          type="submit"
        >
          Register
        </button>
      </form>
      <img
        className="hidden md:flex grayscale h-full mt-24"
        src="homePlant.svg"
      />
    </div>
  );
}
