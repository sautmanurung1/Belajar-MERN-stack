/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets';
const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" />
            </div>
            <div className="right">
                <p>Register</p>
            </div>
        </div>
    )
}

export default Register