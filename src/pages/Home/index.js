import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './Home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);

    const stateGlobal = useSelector(state => state)
    const dispatch = useDispatch();
    console.log('State Global :', stateGlobal);
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'UPDATE_DATA_NAME' })

        }, 3000)

        Axios.get("https://api-saut.up.railway.app/public/api/gombal")
            .then(result => {
                console.log('Data Api: ', result.data);
                const responseAPI = result.data;

                setDataBlog(responseAPI.data);
                dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data });
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }, [dispatch]);
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create a blog" onClick={() => history.push('/create-blog')} />
            </div>
            <p>{stateGlobal.name}</p>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} />;
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home