import React,{UseState} from 'react'
import './Login.css'
import {Link,useHistory} from "react-router-dom"
import { auth } from './firebase';

function Login() {
    return (
        <div className="login">
            <Link to ="/">
            <img className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
        </Link>
        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type="email"/>
                <h5>Password</h5>
                <input type="password"/>
                <button type="submit" className="login_singin">Sign in</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button className="login_register">Create Your Amazon account</button>

        </div>
        </div>
    )
}

export default Login
