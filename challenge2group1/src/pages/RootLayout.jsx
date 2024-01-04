import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComponents/Footer";
import Header from "../components/HeaderComponents/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
