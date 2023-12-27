import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  
  return (
    <>
     <Header />
     <RouterProvider router={router}/>
    </>
  );
}
