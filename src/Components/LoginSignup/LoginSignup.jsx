import React, {useState} from "react";
import './LoginSignup.css'
import email_icon from '../LoginIcons/email.png'
import user_icon from '../LoginIcons/person.png'
import pass_icon from '../LoginIcons/password.png'

const LoginSignup = () => {
    // eslint-disable-next-line
    const[action,setAction] = useState("Sign Up"); 
    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="Carry! Logo" className="" />
                    <input type="text" placeholder="Name" className="" />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" className="" />
                    <input type="email" placeholder="Email"  className="" />
                </div>

                <div className="input">
                    <img src={pass_icon} alt="" className="" />
                    <input type="password" placeholder="Password" className="" />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here!</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default LoginSignup
