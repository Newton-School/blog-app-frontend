import React, {createRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addBlog} from '../store/blogs/blogActions'
import {useHistory} from 'react-router-dom'

function AddBlog() {
    // Input refs
    const topic = createRef()
    const description = createRef()
    const posted_at = createRef()
    const posted_by = createRef()

    // Redux and react-router-dom hooks
    const dispatch = useDispatch()
    const totalBlogs = useSelector(state => state)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const newBlog = {
            id: totalBlogs.length+1,
            topic: topic.current.value,
            description: description.current.value,
            posted_at: posted_at.current.value,
            posted_by: posted_by.current.value
        }
        console.log(typeof posted_at.current.value)
        dispatch(addBlog(newBlog))
        history.goBack()
    }
    
    return (
        <form className = "formContainer" onSubmit = {handleSubmit}>
            <h2 className = "formTitle">Add blog</h2>
            <input ref = {topic} placeholder = "Topic" />
            <textarea ref = {description} placeholder = "Description" height = "2rem" />
            <input type = "date" ref = {posted_at} />
            <input ref = {posted_by} placeholder = "Posted By" />
            <button type = "submit" className = "submitButton">
                Submit
            </button>
        </form>
    )
}


export default AddBlog;