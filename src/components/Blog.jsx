import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteBlog} from '../store/blogs/blogActions'
import '../css/Blog.css'
import '../css/Global.css'

function BlogCard({blog}) {
    const dispatch = useDispatch()

    const {id, topic, description, posted_at, posted_by} = blog

    const handleDelete = () => {
        dispatch(deleteBlog(blog))
    }

    return (
        <div className = "flexRow blogContainer">
            <div className = "firstCol flexCol colBetween">
                <div>{topic}</div>
                <div>{description}</div>
            </div>
            <div className = "secondCol flexCol colBetween">
                <div className = "flexRow">
                    <Link to = {`/editblog/${id}`}>
                        <img src = {require("../assets/edit.svg")} className = "icon" alt = "edit" />
                    </Link>
                    <button onClick = {handleDelete}>
                        <img src = {require("../assets/delete.svg")} className = "icon" alt = "Delete" />
                    </button>
                </div>
                <div className = "">
                    {`Posted on ${posted_at} by ${posted_by}`}
                </div>
            </div>
        </div>
    )
}

export default BlogCard