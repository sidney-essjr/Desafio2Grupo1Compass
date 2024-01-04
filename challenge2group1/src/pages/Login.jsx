import DataInput from "../components/login-signin-components/UserDataInput"
import LoginSigninButton from "../components/login-signin-components/LoginSigninButton"

export default function Login(){
  return(
    <section className="max-w-sm rounded-[14px] overflow-hidden shadow-lg w-full px-10 py-10 bg-lunar focus:outline-none focus:border-blue-500">
      <DataInput label="Email:" id="email" name="emailInput"/>
      <DataInput label="Senha:" id="password" name="passwordInput"/>
      <LoginSigninButton text="Login"/>
    </section>
  )
}