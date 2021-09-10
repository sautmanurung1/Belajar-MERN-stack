import React from 'react'
import { RegisterBg } from '../../../assets'
import './BlogItem.scss'
const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="Post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, metus sit amet vulputate posuere, quam enim dapibus mi, eu maximus tortor sem sed metus. Suspendisse tincidunt nisi vel dolor dignissim lobortis. Maecenas condimentum a felis non cursus. Suspendisse consectetur consequat finibus. Curabitur ultricies eros sit amet ante aliquam, id consequat eros porta. Maecenas pharetra vehicula est vel scelerisque. Sed malesuada, dolor eu congue ornare, magna sapien posuere ligula, lacinia aliquam tortor sapien a magna. Sed lacus lacus, faucibus non euismod nec, finibus vitae elit. Cras sit amet mollis metus. In et est ut augue euismod ultrices nec et diam. Maecenas id lobortis lacus. Phasellus varius diam et elementum ultricies. Integer eget molestie orci. Curabitur dignissim lorem lacinia nisi commodo, et luctus lacus vestibulum. Cras hendrerit, odio in tristique gravida, turpis enim pharetra massa, nec eleifend massa odio sit amet quam. Nam et rhoncus lectus. </p>
            </div>
        </div>
    )
}

export default BlogItem
