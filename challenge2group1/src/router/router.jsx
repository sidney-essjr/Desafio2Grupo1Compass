import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import PlantRegistration from "../pages/PlantRegistration";
import Products from "../pages/Products";
import About from "../pages/About";
import {ProductDetail}  from "../components/ProductComponents/ProductDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "plantRegistration", element: <PlantRegistration /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "products/:id", element: <ProductDetail />}
    ],
  },
]);
export default router;
