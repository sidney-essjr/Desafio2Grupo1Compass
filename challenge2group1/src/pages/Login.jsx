import DataInput from "../components/login-signin-components/UserDataInput"
import LoginSigninButton from "../components/login-signin-components/LoginSigninButton"

export default function Login(){
  return(
    <section>
      <DataInput label="Email:" id="email" name="emailInput"/>
      <DataInput label="Senha:" id="password" name="passwordInput"/>
      <LoginSigninButton text="Login"/>
    </section>
  )
}