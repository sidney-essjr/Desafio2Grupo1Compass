import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Slidercards from "./components/SliderCards";

export function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Slidercards />
    </>
  );
}
