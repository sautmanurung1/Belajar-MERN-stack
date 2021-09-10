import React from 'react'
import './upload.scss'
import {LoginBg} from '../../../assets'
const upload = () => {
    return (
        <div className="upload">
            <img className="preview" src={LoginBg} alt="preview" />
            <input type="file" />
        </div>
    )
}

export default upload
