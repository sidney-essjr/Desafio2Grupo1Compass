import { createBrowserRouter } from "react-router-dom";
import { ProductDetail } from "../components/ProductComponents/ProductDetail";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PlantRegistration from "../pages/PlantRegistration";
import Products from "../pages/Products";
import RootLayout from "../pages/RootLayout";
import Signin from "../pages/Signin";
import UserRegister from "../pages/UserRegister";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => import("../pages/Home").then((module) => module.loader()),
      },
      { path: "plantRegistration", element: <PlantRegistration /> },
      {
        path: "products",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Products />
          </Suspense>
        ),
        loader: () => import("../pages/Home").then((module) => module.loader()),
      },
      { path: "about", element: <About /> },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
        ),
        loader: (meta) =>
          import("../pages/Products").then((module) => module.loader(meta)),
      },
      {
        path: ":id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
        ),
        loader: (meta) =>
          import("../pages/Products").then((module) => module.loader(meta)),
      },
    ],
  },
  {
    path: "/userRegister",
    element: <UserRegister />,
    children: [
      { index: true, element: <Login /> },
      { path: "signin", element: <Signin /> },
    ],
  },
]);
export default router;
