import HomeNav from "./../components/HomeNav";
import "./../style/Login.css";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <HomeNav />
            <div className="login-body">
                <form className="loginBox">
                    <span className="loginTitle">Sign-up</span>
                    <div clasName="inputs">
                        <span><label className="loginDetails">Email-id </label>  </span>
                        <input type="email" className="loginInput" />
                    </div>
                    <div clasName="inputs">
                        <span><label className="loginDetails">Password </label> </span>
                        <input type="password" className="loginInput" />
                    </div>
                    <div clasName="inputs">
                        <span><label className="loginDetails" id="confirm-pw">Re-Password </label> </span>
                        <input type="password" className="loginInput" />
                    </div>
                    <button type="submit">Register</button>
                    <span className="sign-in">Already have an account? <Link to="/login">Login</Link></span>
                </form>
            </div>
        </>
    );    
}

export default Signup;