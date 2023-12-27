import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
);
}

import { RouterProvider } from "react-router-dom";
import router from "./router/router";

export function App() {
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}
