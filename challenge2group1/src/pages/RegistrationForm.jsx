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
    <form
      className="ml-40 mt-10 w-1/2 "
      onSubmit={handleSubmit(checkOnSale)}
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
        />{" "}
        <div>
          <label className="font-inter font-medium text-base" htmlFor="name">
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
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="subtitle">Plant subtitle</label>
          <input
            className="inputstyle"
            id="subtitle"
            {...register("subtitle")}
            type="text"
            placeholder="A majestic addition to your plant collection"
          />
          {errors.subtitle && <span>{errors.subtitle.message}</span>}
        </div>
        <div>
          <label htmlFor="type">Plant type</label>
          <input
            className="inputstyle"
            id="type"
            {...register("type")}
            type="text"
            placeholder="Cactus"
          />
          {errors.type && <span>{errors.type.message}</span>}
        </div>
        <div className="flex gap-5 ">
        <div className="w-[233px]">
          <label htmlFor="price">Price</label>
          <input
            className="inputstyle"
            id="price"
            {...register("price")}
            type="number"
            placeholder="$139.99"
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div  className="w-[224px]">
          <label htmlFor="discountPercentage">Discount percentage</label>
          <input
            className=" inputstyle "
            id="discountPercentage"
            {...register("discountPercentage")}
            type="number"
            placeholder="20%"
          />
          {errors.discountPercentage && (
            <span>{errors.discountPercentage.message}</span>
          )}
        </div>
        </div>
        <div className=" flex flex-col mb-4">
        
          <label className="mb-2 font-semibold"htmlFor="">Label:</label>
          <div className=" flex flex-row gap-3">
          <div>
            <input
              id="indor"
              {...register("label")}
              type="radio"
              value="indoor"
            />
            <label htmlFor="indor">Indoor</label>
          </div>
          <div>
            <input
              id="outdoor"
              {...register("label")}
              type="radio"
              value="outdoor"
            />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
          </div>
          {errors.label && <span>{errors.label.message}</span>}
        </div>
       
        <div>
          <label htmlFor="features">Features</label>
          <textarea
            className=" inputstyle h-[125px]"
            {...register("features")}
            id="features"
            cols="30"
            rows="10"
            placeholder="Species: Echinocereus..."
          ></textarea>
          {errors.features && <span>{errors.features.message}</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className=" inputstyle h-[125px]"
            {...register("description")}
            id="description"
            cols="30"
            rows="10"
            placeholder="Ladyfinger cactus..."
          ></textarea>
          {errors.description && <span>{errors.description.message}</span>}
        </div>
      </fieldset>

      <button className=" mx-auto bg-lunar text-white px-48 py-3 mb-20 mt-10" type="submit">Register</button>
    </form>
    <img className="grayscale " src="homePlantBW.svg"/>
    </div>
  );
}
