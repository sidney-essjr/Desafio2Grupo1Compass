import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../pages/RootLayout"
// import {Home} from "../pages/Home"
// import {RegistrationForm} from "../pages/RegistrationForm"
// import {Products} from "../pages/Products"
// import {About} from "../pages/About"


const router = createBrowserRouter([
	{
    path: "/",
    element: <RootLayout />,
    // children: [
      // {index: true, element: <Home />}, 
      // {path: "register", element: <Register/>},
      // {path: "products", element: <Products />},
      // {path: "about", element: <About />}
    // ]
  }
]) 
export default router