import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Slidercards from "./components/SliderCards";

export function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Slidercards
        title={"this weeks Most Popular and best selling"}
        onSale={false}
      />
    </>
  );
}
