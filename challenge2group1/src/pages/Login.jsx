import DataInput from "../components/login-signin-components/UserDataInput"
import LoginSigninButton from "../components/login-signin-components/LoginSigninButton"

export default function Login(){
  return(
    <section className="flex-col max-w-sm rounded-[14px] overflow-hidden w-full px-1 md:px-10 py-1 md:py-10 mx-auto  bg-lunar focus:outline-none focus:border-blue-500">
      <DataInput label="Email:" id="email" name="emailInput"/>
      <DataInput label="Senha:" id="password" name="passwordInput" type="password"/>
      <LoginSigninButton text="Login"/>
    </section>
  )
}