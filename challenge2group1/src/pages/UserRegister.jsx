import { Outlet } from "react-router-dom";
import HeaderLoginSignin from "../components/login-signin-components/HeaderLoginSignin";
import { dynamicPageTitle } from "../util/util";

export default function UserRegister() {
  dynamicPageTitle(window.location.pathname);
  return (
    <main >
      <div className="bg-[url(src/assets/register-image.svg)] absolute  bg-cover h-[100%] w-[100%] opacity-25"></div>
      <section className="grid place-items-center h-screen text-gelo border-solid border-2 relative ">
        <section className="shadow-strongShadow">
          <HeaderLoginSignin />
          <Outlet />
        </section>
      </section>
    </main> 
  );
}
