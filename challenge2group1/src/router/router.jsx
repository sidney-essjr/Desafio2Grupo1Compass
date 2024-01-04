import Home from "../pages/Home";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RootLayout from "../pages/RootLayout";
import { ProductDetail } from "../components/ProductComponents/ProductDetail";

// const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const PlantRegistration = lazy(() => import("../pages/PlantRegistration"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Signin = lazy(() => import("../pages/Signin"));
const UserRegister = lazy(() => import("../pages/UserRegister"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "plantRegistration",
        element: (
          <Suspense fallback={<Loading />}>
            <PlantRegistration />
          </Suspense>
        ),
      },
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
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        errorElement: <Error />,
        element: <ProductDetail />,
        loader: (meta) =>
          import("../pages/Products").then((module) => module.loader(meta)),
      },
      {
        path: ":id",
        errorElement: <Error />,
        element: <ProductDetail />,
        loader: (meta) =>
          import("../pages/Products").then((module) => module.loader(meta)),
      },
    ],
  },
  {
    path: "/userRegister",
    element: (
      <Suspense fallback={<Loading />}>
        <UserRegister />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signin",
        element: (
          <Suspense fallback={<Loading />}>
            <Signin />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
