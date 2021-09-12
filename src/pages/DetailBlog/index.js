import React from 'react'
import {LoginBg} from '../../assets/'
import { Gap, Link } from '../../components'
import './DetailBlog.scss'
import { useHistory } from 'react-router-dom'
const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={LoginBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum volutpat erat, quis tempor velit convallis et. Quisque semper augue et ex mollis aliquam. Phasellus vitae tortor ut arcu lobortis tempus a at tellus. Suspendisse faucibus, tellus vitae facilisis consectetur, mi risus auctor turpis, id maximus nisl sem vitae lacus. Mauris ut lorem a nibh pulvinar pellentesque. Curabitur vitae elit metus. Vivamus egestas sed nulla in luctus. Suspendisse potenti. In id dignissim turpis. Nullam sed metus ultricies, eleifend nisi eget, volutpat mi. Praesent erat magna, viverra ac urna et, feugiat iaculis est. Proin nec eros ut metus tempus molestie. Curabitur et blandit quam, nec dignissim eros. Aenean et justo lorem. Fusce non ligula euismod, iaculis leo condimentum, pellentesque velit. Donec ullamcorper sem eget leo sodales, ac placerat lectus cursus. </p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={()=>history.push('/')} />
        </div>
    )
}

export default DetailBlog
