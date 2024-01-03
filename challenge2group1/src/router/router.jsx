import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProductDetail } from "../components/ProductComponents/ProductDetail";
import About from "../pages/About";
import Login from "../pages/Login";
import PlantRegistration from "../pages/PlantRegistration";
import RootLayout from "../pages/RootLayout";
import Signin from "../pages/Signin";
import UserRegister from "../pages/UserRegister";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { loader as plantsLoader } from "../pages/Home";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
        loader: plantsLoader,
      },
      { path: "plantRegistration", element: <PlantRegistration /> },
      {
        path: "products",
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
        loader: () => import("../pages/Home").then((module) => module.loader()),
      },
      { path: "about", element: <About /> },
      {
        path: "products/:id",
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
        loader: (meta) =>
          import("../pages/Products").then((module) => module.loader(meta)),
      },
      {
        path: ":id",
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Loading />}>
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
