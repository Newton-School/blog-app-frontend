import {GET_BLOGS, ADD_BLOG, EDIT_BLOG, DELETE_BLOG} from './blogTypes'
import axios from 'axios'

const URL = "https://localhost:8000"

export const blogsFetched = blogs => ({
    type: GET_BLOGS,
    payload: blogs,
})

export const blogAdded = addBlog => ({
    type: ADD_BLOG,
    payload: addBlog
})

export const blogEdited = editBlog => ({
    type: EDIT_BLOG,
    payload: editBlog
})

export const blogDeleted = deletedBlog => ({
    type: DELETE_BLOG,
    payload: deletedBlog
})

export const fetchBlogsInPage = page => {
    return async dispatch => {
        const fetchedJSON = await fetch(`${URL}/allblog?page=${page}`)
        const data = fetchedJSON.json()
        dispatch(blogsFetched(data))
    }
}

export const addBlog = blog => {
    return async dispatch => {
        // TODO
        // const addedBlog = await axios.post(`${URL}/addblog`, blog)
        dispatch(blogAdded(blog))
    }
}

export const editBlog = editedBlog => {
    return async dispatch => {
        // TODO
        // const editedBlog = await axios.put(`${URL}/editblog/${blog.id}`, blog)
        dispatch(blogEdited(editedBlog))
    }
}

export const deleteBlog = deletedBlog => {
    return async dispatch => {
        // const deletedBlog = await axios.delete(`${URL}/deleteblog/${id}`)
        console.log("time to delete this blog", deletedBlog)
        dispatch(blogDeleted(deletedBlog))
    }
}