import { NavLink, Link } from "react-router-dom";

export default function HeaderLoginSignin() {
  return (
    <header className="">
      <img
        className=" flex w-[202px] h-[140px] mx-auto pr-4"
        src="plantPeace.svg"
        alt=""
      />
      <nav className="text-lunar flex flex-row py-2 justify-center gap-10 font-bold">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
          end
          className="hover:text-abacate"
          to=""
        >
          Login
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
          className="hover:text-abacate"
          to="signin"
        >
          Sign in
        </NavLink>
        <Link className="hover:text-abacate" to="/">
          Home
        </Link>
      </nav>
    </header>
  );
}
