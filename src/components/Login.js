import HomeNav from "./../components/HomeNav";
import "./../style/Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <HomeNav />
            <div className="login-body">
                <form className="loginBox">
                    <span className="loginTitle">Login</span>
                    <div clasName="inputs">
                    <span><label className="loginDetails">Email-id </label>  </span>
                    <input type="email" className="loginInput" />
                    </div>
                    <div clasName="inputs">
                    <span><label className="loginDetails">Password </label> </span>
                    <input type="password" className="loginInput" />
                    </div>
                    <button type="submit">Continue</button>
                    <span className="sign-in">New to Pizza-Bruno? <Link to="/signup">Sign-up</Link></span>
                </form>
            </div>
        </>
    );    
}

export default Login;