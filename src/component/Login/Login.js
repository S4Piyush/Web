import React, { useEffect, useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorToast, SuccessToast } from '../../helper/Toast';
import { ApiPost } from '../../helper/Api/Apidata';
import AuthStorage from '../../helper/AuthStorage';

function Login() {

    const GoogleAppId = "1020793013781-c6s43djd5v68cqjq5a60t6h6a599g1ie.apps.googleusercontent.com";

    const navigate = useNavigate();
    const [data, setdata] = useState({
        email: "",
        password: "",
    })
    const handelChnages = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    const submit = () => {
        if (!data.email && !data.password) {
            ErrorToast("All fields required")
        } else if (!data.email) {
            ErrorToast("Email is Requried!");
        } else if (!data.password) {
            ErrorToast("Password is Requried!");
        } else {
            const body = {
                email: data?.email,
                password: data?.password
            }
            try {
                ApiPost('api/admin_Login/user_login', body)
                    .then((res) => {
                        AuthStorage.setStorageJsonData("UserData", res, true)
                        navigate('/dashboard')
                        SuccessToast("Login Successfully!")
                    }).catch((err) => {
                        ErrorToast(err?.response?.data)
                    })
            } catch (err) {

            }

        }
    }
    return (
        <div className="login-container">
            <form className="login-form" >
                <h2>Login</h2>
                <div className='input_main'>
                    <input type="text" placeholder="email" name="email" onChange={handelChnages} />
                    <input type="password" placeholder="password" name="password" onChange={handelChnages} />
                </div>
                <button type="button" onClick={submit}>Log In</button>
                <h6 style={{ textAlign: "end", cursor: "pointer" }} onClick={() => navigate("/ForgotPassword")}>Forgot Password?</h6>
                <p>Don’t have an account? <Link to="/sigunp">Sign Up</Link></p>
            </form>
        </div >
    );
};
export default Login