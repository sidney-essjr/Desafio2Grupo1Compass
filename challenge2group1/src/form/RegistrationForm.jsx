export default function RegistrationForm() {
  return (
    <form action="">
      <fieldset>
        <h1>Plant registration</h1>
        <div>
          <label htmlFor="name">Plant name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="subtitle">Plant subtitle</label>
          <input id="subtitle" name="subtitle" type="text" />
        </div>
        <div>
          <label htmlFor="type">Plant type</label>
          <input id="type" name="type" type="text" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" name="price" type="number" />
        </div>
        <div>
          <label htmlFor="discount">Discount percentage</label>
          <input id="discount" name="discount" type="number" />
        </div>
        <div>
          <label htmlFor="">Environment</label>
          <div>
            <input id="indor" name="environment" type="checkbox" />
            <label htmlFor="indor">Indoor</label>
          </div>
          <div>
            <input id="outdoor" name="environment" type="checkbox" />
            <label htmlFor="outdoor">Outdoor</label>
          </div>
        </div>
        <div>
          <label htmlFor="features">Features</label>
          <textarea
            name="features"
            id="features"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </fieldset>

      <button type="submit">Register</button>
    </form>
  );
}
