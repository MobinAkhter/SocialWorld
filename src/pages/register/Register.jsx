import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>SOCIAL WORLD</h1>
                <p>Welcome to a one stop place where you can socialize with your network. </p>
                
                <Link to="/login">
                <button>Login</button>

                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>

                </form>
            </div>

        </div>
    
    </div>
  )
}

export default Register