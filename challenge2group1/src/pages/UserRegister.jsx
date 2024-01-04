import { Outlet } from "react-router-dom"
import HeaderLoginSignin from "../components/login-signin-components/HeaderLoginSignin"

export default function UserRegister(){
  return (
    <section className="grid place-items-center h-screen bg-gelo text-gelo border-solid border-2">
      <section>
        <HeaderLoginSignin />
        <Outlet />
      </section>
    </section>
  );
}