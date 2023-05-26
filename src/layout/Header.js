import React from 'react'
import AuthStorage from '../helper/AuthStorage'
import './header.css'

const Header = () => {
    const data = AuthStorage.getStorageJsonData("UserData", true)
    console.log('data', data)
    return (
        <div className='header_main'>
            <h6>{data?.userSinupData?.userName}</h6>
            <h6>{data?.userSinupData?.email}</h6>
        </div>
    )
}

export default Header 