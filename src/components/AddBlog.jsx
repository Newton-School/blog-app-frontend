import React from 'react'
import Axios from 'axios';

const AddBlog = (props) => {
    return (
        <>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Add new blog" onChange={props.blogCreating} />
                <button>Add New Blog</button>
            </form>
        </>)
}


export default AddBlog;