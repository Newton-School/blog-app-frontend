import React, {useState} from 'react';
import BlogCard from './Blog'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../css/Global.css'
import '../css/Home.css'

function Home() {
    const [page, setPage] = useState(1)
    const totalBlogs = useSelector(state => state)

    const handlePageChange = index => {
        setPage(index)
    }
    
    return (
        <div className = "homeContainer">
            <div className = "mainContainer">
                <div className = "homeHeader">
                    <div>
                        <h1>Welcome user</h1>
                        <h3>You can manage your blogs here!</h3>
                    </div>
                    <Link to = "/addblog">
                        <div className = "submitButton">
                            Add blog!
                        </div>
                    </Link>
                </div>
                <div className = "blogList flexCol">
                    {totalBlogs.filter((t, ind) => ind >= (page-1)*5 && ind < page*5).map(blog => <BlogCard key = {blog.id} blog = {blog} />)}
                    {totalBlogs.length > 5? 
                    <div className = "indicatorContainer">
                        {new Array(Math.round(totalBlogs.length/5)+1).fill(0).map((val, ind) => <button onClick = {() => handlePageChange(ind+1)} key = {val} className = "indicator">{ind+1}</button>)}
                    </div>:
                    null}
                </div>
            </div>
        </div>
    )

}

export default Home;