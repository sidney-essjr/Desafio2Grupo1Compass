import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  
  return (
    <>
     <Header />
     <RouterProvider router={router}/>
<<<<<<< HEAD
=======
     <Footer />
>>>>>>> 58fcbc4e59af9906989cc0dbf04857dff3d0e0f7
    </>
  );
}
