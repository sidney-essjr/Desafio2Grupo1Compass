import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { updatePlants } from "../data/https";
import {
  containsDiscount,
  createRegistrationFormSchema,
} from "../form/validation";

const regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/`|\=]/;

export default function PlantRegistration() {
  const initialAssembly = useRef(true);
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [type, setType] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    setValue,
    control,
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
    data.imgUrl = "assets/EchinocereusCactus.svg";
    delete data.type;

    fetchPlants(data);
    reset();
    cleanHistory();
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

  useEffect(() => {
    if (!initialAssembly.current) {
      const formValues = getValues();
      storageData("form", JSON.stringify(formValues));
    }
    initialAssembly.current = false;
  }, [watch()]);

  useEffect(() => {
    setLocalData();
  }, []);

  function storageData(key, value) {
    localStorage.setItem(key, value);
  }

  function setLocalData() {
    try {
      const data = JSON.parse(localStorage.getItem("form"));
      setName(data.name);
      setSubtitle(data.subtitle);
      setType(data.type);
      setValue("price", data.price);
      setValue("discountPercentage", data.discountPercentage);
      setValue("label", data.label);
      setValue("features", data.features);
      setValue("description", data.description);
    } catch (error) {
      return "No data stored";
    }
  }

  function cleanHistory() {
    localStorage.removeItem("form");
  }

  function handleIptName(event) {
    const value = event.target.value;
    if (!regex.test(value)) {
      setName(value);
    }
  }

  function handleIptSubtitle(event) {
    const value = event.target.value;
    if (!regex.test(value)) {
      setSubtitle(value);
    }
  }

  function handleIptType(event) {
    const value = event.target.value;
    if (!regex.test(value)) {
      setType(value);
    }
  }

  return (
    <div className="flex 2xl:justify-center gap-5 bg-gelo overflow-hidden	w-screen">
      <form
        className=" mx-10 mt-5 md:mx-20 md:mt-10  "
        onSubmit={handleSubmit(hadleChanges)}
      >
        <fieldset>
          <h1 className="text-lunar font-inter font-semibold ">
            Plant registration
          </h1>
          <hr
            className="text-linegray mt-2 mb-5"
            size="10"
            width="100%"
            aling="center"
          />
          <div>
            <div className="label-div">
              <label className="labelstyle" htmlFor="name">
                Plant name
              </label>
              <p className="mb-2">
                {errors.name && (
                  <span className="errormessage">{errors.name.message}</span>
                )}
              </p>
            </div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`inputstyle ${
                    !!errors.name?.message ? "input-error-style" : null
                  }`}
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Echinocereus Cactus"
                  onChange={(e) => field.onChange(handleIptName(e))}
                  value={name}
                />
              )}
            />
          </div>
          <div>
            <div className="label-div">
              <label className="labelstyle" htmlFor="subtitle">
                Plant subtitle
              </label>
              <p className="mb-2">
                {errors.subtitle && (
                  <span className="errormessage">
                    {errors.subtitle.message}
                  </span>
                )}
              </p>
            </div>
            <Controller
              name="subtitle"
              control={control}
              render={({ field }) => (
                <input
                  className={`inputstyle ${
                    !!errors.subtitle?.message ? "input-error-style" : null
                  }`}
                  id="subtitle"
                  {...register("subtitle")}
                  type="text"
                  placeholder="A majestic addition to your plant collection"
                  onChange={(e) => field.onChange(handleIptSubtitle(e))}
                  value={subtitle}
                />
              )}
            />
          </div>
          <div>
            <div className="label-div">
              <label className="labelstyle" htmlFor="type">
                Plant type
              </label>
              <p className="mb-2">
                {errors.type && (
                  <span className="errormessage">{errors.type.message}</span>
                )}
              </p>
            </div>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <input
                  className={`inputstyle ${
                    !!errors.type?.message ? "input-error-style" : null
                  }`}
                  id="type"
                  {...register("type")}
                  type="text"
                  placeholder="Cactus"
                  onChange={(e) => field.onChange(handleIptType(e))}
                  value={type}
                />
              )}
            />
          </div>
          <div className="flex gap-5 h-24">
            <div className="w-1/2 ">
              <div className="label-div">
                <label className="labelstyle" htmlFor="price">
                  Price
                </label>
                <p>
                  {errors.price && (
                    <span className="errormessage">{errors.price.message}</span>
                  )}
                </p>
              </div>
              <input
                className={`inputstyle ${
                  !!errors.price?.message ? "input-error-style" : null
                }`}
                id="price"
                {...register("price")}
                type="number"
                placeholder="$139.99"
                step={0.01}
              />
            </div>
            <div className="w-1/2">
              <div className="label-div">
                <label className="labelstyle" htmlFor="discountPercentage">
                  Discount percentage
                </label>
              </div>
              <input
                className={`inputstyle ${
                  !!errors.discountPercentage?.message
                    ? "input-error-style"
                    : null
                }`}
                id="discountPercentage"
                {...register("discountPercentage")}
                type="number"
                placeholder="20%"
                min="0"
                max="100"
              />
            </div>
          </div>
          <div className=" flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="">
              Label:
            </label>
            <div className=" flex flex-row gap-3">
              <input
                className=" h-4 w-4 mr-1"
                id="indoor"
                {...register("label")}
                type="radio"
                value="indoor"
                checked
              />
              <label className="labelstyle" htmlFor="indoor">
                Indoor
              </label>

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
          <div>
            <div className="label-div">
              <label className="labelstyle" htmlFor="features">
                Features
              </label>
              <p className="">
                {errors.features && (
                  <span className="errormessage">
                    {errors.features.message}
                  </span>
                )}
              </p>
            </div>
            <textarea
              className={`inputstyle h-[125px] ${
                !!errors.features?.message ? "input-error-style" : null
              }`}
              {...register("features")}
              id="features"
              cols="30"
              rows="10"
              placeholder="Species: Echinocereus..."
              maxLength={200}
            ></textarea>
          </div>
          <div>
            <div className="label-div">
              <label className="labelstyle" htmlFor="description">
                Description
              </label>
              <p className="">
                {errors.description && (
                  <span className="errormessage">
                    {errors.description.message}
                  </span>
                )}
              </p>
            </div>
            <textarea
              className={`inputstyle h-[125px] ${
                !!errors.description?.message ? "input-error-style" : null
              }`}
              {...register("description")}
              id="description"
              cols="30"
              rows="10"
              placeholder="Ladyfinger cactus..."
              maxLength={200}
            ></textarea>
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
