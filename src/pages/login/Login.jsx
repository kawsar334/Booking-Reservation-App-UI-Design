import { NavLink } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginHeader">Login</h1>
        <form action="">
          <input type="text" placeholder="Username " />
          <input type="text" placeholder="Email " />
          <input type="text" placeholder="Password " />
          <button>Login</button>
        </form>
        <span>Don't Have any account? 
         <NavLink to="/register" >Register</NavLink>
        </span>
      </div>
    </div>
  )
}

export default Login