import { Link } from "react-router-dom"

export default function HeaderLoginSignin(){
  return (
    <header className="">
      <nav className="">
        <div >
          <Link to="login" >Login</Link>
          <Link to="signin">Sign in</Link>
        </div>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}