import DataInput from "../components/login-signin-components/UserDataInput";
import LoginSigninButton from "../components/login-signin-components/LoginSigninButton";

export default function Signin() {
  return (
    <section className="flex-col max-w-sm rounded-[14px] overflow-hidden w-full px-1 md:px-10 py-1 md:py-10 mx-auto  bg-lunar focus:outline-none focus:border-blue-500">
      <DataInput className="w-[150px]" label="User Name:" id="userName" name="userNameInput" />
      <DataInput label="Email:" id="email" name="emailInput" />
      <DataInput
        label="Senha:"
        type="password"
        id="password"
        name="passordInput"
      />
      <DataInput
        label="Confirmar senha:"
        type="password"
        id="confirmPassword"
        name="confirmPasswordInput"
      />
      <LoginSigninButton text="Sign in" />
    </section>
  );
}
