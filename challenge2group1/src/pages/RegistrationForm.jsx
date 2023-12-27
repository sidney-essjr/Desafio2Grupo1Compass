import { useForm } from "react-hook-form";
import { createRegistrationFormSchema } from "../form/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createRegistrationFormSchema),
  });

  function checkOnSale(data) {
    data.discountPercentage > 0
      ? (data.isInSale = true)
      : (data.isInSale = false);

    console.log(data);
  }

  return (
    <div className="flex justify-center gap-5 bg-gelo">
      <form className="ml-40 mt-10 w-2/5 " onSubmit={handleSubmit(checkOnSale)}>
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
            {errors.name && (
              <span className="errormessage">{errors.name.message}</span>
            )}
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
            {errors.subtitle && (
              <span className="errormessage">{errors.subtitle.message}</span>
            )}
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
            {errors.type && (
              <span className="errormessage">{errors.type.message}</span>
            )}
          </div>
          <div className="flex gap-5 ">
            <div className="w-[233px]">
              <label className="labelstyle" htmlFor="price">
                Price
              </label>
              <input
                className="inputstyle"
                id="price"
                {...register("price")}
                type="number"
                placeholder="$139.99"
              />
              {errors.price && (
                <span className="errormessage">{errors.price.message}</span>
              )}
            </div>
            <div className="w-[224px]">
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
              {errors.discountPercentage && (
                <span className="errormessage">
                  {errors.discountPercentage.message}
                </span>
              )}
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
            {errors.label && (
              <span className="errormessage">{errors.label.message}</span>
            )}
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
            {errors.features && (
              <span className="errormessage">{errors.features.message}</span>
            )}
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
            {errors.description && (
              <span className="errormessage">{errors.description.message}</span>
            )}
          </div>
        </fieldset>

        <button
          className=" ml-4 bg-lunar text-white px-48 py-3 mb-20 mt-10"
          type="submit"
        >
          Register
        </button>
      </form>
      <img className="grayscale w-3/5" src="homePlantBW.svg" />
    </div>
  );
}
