import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";


export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
