import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { Link, useNavigate } from 'react-router-dom'
import './otp.css';
import { ApiPost } from '../../helper/Api/Apidata';
import { ErrorToast } from '../../helper/Toast';


const Otp = () => {
    const email = localStorage.getItem("email")
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');
    const verify = () => {
        const body = {
            otp: parseInt(otp),
            email: JSON.parse(email)
        }
        try {
            ApiPost('api/admin_Login/otp_verification', body)
                .then((res) => {
                    console.log('res', res)
                    navigate('/ChangePassword')
                }).catch((err) => {
                    ErrorToast(err.response.data)
                })

        } catch (error) {
            console.log('error', error)

        }
    }
    return (
        <div className="loginuserdetail">
            <div className="login-form" >
                <h3 style={{ margin: '10px' }}>2 Step Verification </h3>
                <p style={{ margin: '10px' }}>
                    An 6-digit code has been sent to Your Email: .....
                    {/* {email?.split("@")[0]?.slice(-2) + "@" + email?.split("@")[1]} */}
                </p>
                <OTPInput
                    value={otp}
                    onChange={((e) => setOtp(e))}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    containerStyle={{ justifyContent: 'center' }}
                    inputStyle={{ height: '40px', width: '40px', margin: "10px" }}
                />
                <button onClick={() => verify()}>Verify</button>
            </div>
        </div>
    )
}

export default Otp