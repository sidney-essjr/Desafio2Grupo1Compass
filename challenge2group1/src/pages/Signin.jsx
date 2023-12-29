import DataInput from "../components/login-signin-components/UserDataInput"
import LoginSigninButton from "../components/login-signin-components/LoginSigninButton"


export default function Signin(){
  return (
    <section>
      <DataInput label="User Name:" id="userName" name="userNameInput"/>
      <DataInput label="Email:" id="email" name="emailInput"/>
      <DataInput label="Senha:" type="password" id="password" name="passordInput"/>
      <DataInput label="Confirmar senha:" type="password" id="confirmPassword" name="confirmPasswordInput"/>
      <LoginSigninButton text="Sign in"/>
    </section>
  )
}