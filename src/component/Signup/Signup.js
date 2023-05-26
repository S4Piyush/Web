import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ApiPostNoAuth } from '../../helper/Api/Apidata';
import { ErrorToast, SuccessToast } from '../../helper/Toast';
import AuthStorage from '../../helper/AuthStorage';

function Signup() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        UserName: "",
        email: "",
        password: "",
    })
    console.log('data', data)

    const handelChnages = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    const submit = () => {
        if (!data.UserName && !data.email && !data.password) {
            ErrorToast("All fields required")
        } else if (!data.email) {
            ErrorToast("Email is Requried!");
        } else if (!data.password) {
            ErrorToast("password is Requried!");
        } else {
            const body = {
                userName: data?.UserName,
                email: data?.email,
                password: data?.password
            }
            try {
                ApiPostNoAuth('api/admin_Login/user_signUp', body)
                    .then((res) => {
                        console.log('res', res)
                        AuthStorage.setStorageJsonData("UserData", res, true)
                        navigate('/dashboard')
                        SuccessToast("Sign Up Successfully!")
                    }).catch((err) => {
                        ErrorToast(err?.response?.data)
                    })
            } catch (error) {
                console.log('error', error)

            }
        }
    }
    return (
        <div className="login-container">
            <form className="login-form" >
                <h2>Sign up</h2>
                <div className='input_main'>
                    <input type="text" name="UserName" placeholder="UserName" onChange={handelChnages} />
                    <input type="text" name="email" placeholder="Email" onChange={handelChnages} />
                    <input type="password" name="password" placeholder="password" onChange={handelChnages} />
                </div>
                <button type="button" onClick={submit}>Signup</button>
                <p> Back to <Link to="/">Login</Link> </p>
            </form>
        </div >
    )
}

export default Signup