import { Outlet } from "react-router-dom";
import HeaderLoginSignin from "../components/login-signin-components/HeaderLoginSignin";
import { dynamicPageTitle } from "../util/util";

export default function UserRegister() {
  dynamicPageTitle(window.location.pathname);
  return (
    <main >
      <div className="bg-[url(src/assets/register-image.svg)] absolute  bg-cover h-[140vh] w-screen opacity-25"></div>
      <section className="flex mx-auto text-gelo border-solid border-2 relative justify-center">
        <section className=" my-20 w-11/12">
          <HeaderLoginSignin />
          <Outlet />
        </section>
      </section>
    </main> 
  );
}
