import React, { useState } from 'react'
import { ApiPost } from '../../helper/Api/Apidata'
import { useNavigate } from 'react-router-dom'
function ForgotPassword() {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target
        setemail({ ...email, [name]: value })
    }
    const submit = () => {
        try {
            const body = {
                email: email?.email
            }
            ApiPost('api/admin_Login/user_ForgetPassword', body)
                .then((res) => {
                    console.log('res', res)
                    localStorage.setItem("email", JSON.stringify(res.email));
                    navigate('/otp')
                }).catch((err) => {
                    console.log('err', err)
                })

        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <div className='login'>
            <div className="login-container">
                <form className="login-form" >
                    <h2>ForgotPassword</h2>
                    <div className='input_main'>
                        <input type="text" placeholder="email" name="email" onChange={handleChange} />
                    </div>
                    <button type="button" onClick={() => submit()}>Send otp </button>
                </form>
            </div >
        </div>
    )
}

export default ForgotPassword