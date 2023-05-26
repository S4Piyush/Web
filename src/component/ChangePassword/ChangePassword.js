import React, { useState } from 'react'
import './ChangePassword.css'
import { ErrorToast, SuccessToast } from '../../helper/Toast';
import { ApiPost } from '../../helper/Api/Apidata';
import AuthStorage from '../../helper/AuthStorage';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const email = AuthStorage.getStorageJsonData("email", true)
    const navigate = useNavigate()
    console.log('email', email)
    const [password, setpassword] = useState({
        Password: "",
        ConfirmPassword: "",
    })
    console.log('password', password)
    const handelChnages = (e) => {
        const { name, value } = e.target
        setpassword({ ...password, [name]: value })
    }
    const submit = () => {
        console.log('first')
        if (!password.Password && !password.ConfirmPassword && !password.email) {
            ErrorToast("All fields required")
        }
        else if (!password.Password) {
            ErrorToast("Password is required")
        } else if (!password.ConfirmPassword) {
            ErrorToast("ConfirmPassword is required")
        } else if (password.Password !== password.ConfirmPassword) {
            ErrorToast("password and confirm password does not match");
        } else {
            const body = {
                password: password.Password,
                email: email
            }
            ApiPost('api/admin_Login/reset_password', body)
                .then((res) => {
                    console.log('res', res)
                    navigate('/')
                }).catch((err) => {
                    console.log('err', err)
                })
        }
    }
    return (
        <div className="loginuserdetail">
            <div className="login-form" >
                <h2>ChangePassword</h2>
                <div className='input_main'>
                    {/* <input type="text" name="email" placeholder="email" onChange={handelChnages} /> */}
                    <input type="password" name="Password" placeholder="Password" onChange={handelChnages} />
                    <input type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={handelChnages} />
                </div>
                <button onClick={() => submit()}>Change Password</button>
            </div>
        </div>
    )
}

export default ChangePassword