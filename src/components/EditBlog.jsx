import React, {useEffect, createRef} from 'react';
import {useParams} from 'react-router-dom'
import {editBlog} from '../store/blogs/blogActions'
import {useStore, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import '../css/Global.css'


function EditBlog() {
    const topic = createRef()
    const description = createRef()
    const posted_at = createRef()
    const posted_by = createRef()

    const {id} = useParams()
    const blogToEdit = useStore().getState().find(element => element.id === parseInt(id))
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        topic.current.value = blogToEdit.topic
        description.current.value = blogToEdit.description
        posted_at.current.value = blogToEdit.posted_at
        posted_by.current.value = blogToEdit.posted_by
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const editedBlog = {
            id: parseInt(id),
            topic: topic.current.value,
            description: description.current.value,
            posted_at: posted_at.current.value,
            posted_by: posted_by.current.value
        }
        dispatch(editBlog(editedBlog))
        history.goBack()
    }

    return (
        <form className = "formContainer" onSubmit = {handleSubmit}>
            <h2 className = "formTitle">Edit blog</h2>
            <input ref = {topic} placeholder = "Topic" />
            <textarea ref = {description} placeholder = "Description" height = "2rem" />
            <input ref = {posted_at} placeholder = "Date posted" />
            <input ref = {posted_by} placeholder = "Posted By" />
            <button type = "submit" className = "submitButton">
                Submit
            </button>
        </form>
    )
}


export default EditBlog;