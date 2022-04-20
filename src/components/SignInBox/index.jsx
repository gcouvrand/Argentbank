import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login, UserInfos } from "../../services/ApiCall"

function SignInBox(props) {

    const [email, setEmail] = useState({"email": ""})
    const [password, setPassword] = useState({"password": ""})
    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        try {
        e.preventDefault()
        const token = await Login(email, password)
            if (token) {
                dispatch({
                    type: "SignIn",
                    token: token,
                    loggedIn: true,
                })
            }
            UserInfos(token)
            const infos = await UserInfos(token)
            dispatch({
                type: "UpdateName",
                firstName: infos.firstName,
                lastName : infos.lastName,
            })
            } catch (e) {
                console.log(e);
            }
    }
 

    if(useSelector(state => state.Actions.loggedIn))
        return <Navigate to="/user"/>

    return(
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" onChange={onChangeEmail} />
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={onChangePassword} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
            </form>
        </section>
    )
}

export default SignInBox