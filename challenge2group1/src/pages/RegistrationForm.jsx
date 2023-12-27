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

  function validateInputs(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(validateInputs)}>
      <fieldset>
        <h1>Plant registration</h1>
        <div>
          <label htmlFor="name">Plant name</label>
          <input id="name" {...register("name")} type="text" />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="subtitle">Plant subtitle</label>
          <input id="subtitle" {...register("subtitle")} type="text" />
          {errors.subtitle && <span>{errors.subtitle.message}</span>}
        </div>
        <div>
          <label htmlFor="type">Plant type</label>
          <input id="type" {...register("type")} type="text" />
          {errors.type && <span>{errors.type.message}</span>}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" {...register("price")} type="number" />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div>
          <label htmlFor="discountPercentage">Discount percentage</label>
          <input
            id="discountPercentage"
            {...register("discountPercentage")}
            type="number"
          />
          {errors.discountPercentage && (
            <span>{errors.discountPercentage.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Label</label>
          <div>
            <input id="indor" {...register("label")} type="checkbox" />
            <label htmlFor="indor">Indoor</label>
          </div>
          <div>
            <input id="outdoor" {...register("label")} type="checkbox" />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
          {errors.label && <span>{errors.label.message}</span>}
        </div>
        <div>
          <label htmlFor="features">Features</label>
          <textarea
            {...register("features")}
            id="features"
            cols="30"
            rows="10"
          ></textarea>
          {errors.features && <span>{errors.features.message}</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          {errors.description && <span>{errors.description.message}</span>}
        </div>
      </fieldset>

      <button type="submit">Register</button>
    </form>
  );
}
