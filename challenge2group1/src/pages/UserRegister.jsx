import { Outlet } from "react-router-dom"
import HeaderLoginSignin from "../components/login-signin-components/HeaderLoginSignin"

export default function UserRegister(){
  return (
    <section className="grid place-items-center h-screen text-lunar border-solid border-2 border-sky-500">
    <section>
      <HeaderLoginSignin />
      <Outlet />
    </section>
    </section>
  )
}