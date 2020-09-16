import { Avatar} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
function AddBlog() {

    useEffect(() => {
        console.log("loging");
        return () => {
            // cleanup
        }
    }, [])

    const [post, setPost] = useState({
        topic:"",
        description:"",
        posted_at:new Date(Date.now()).toLocaleString().split(',')[0],
        posted_by:""
    })



    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPost(prev=>{
            return {...prev,[name]:value}
        })
    }

    const handleSubmit=async()=>{
        console.log(post);
        const data=await fetch(`/post/blog`,{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(post)})
        const res=await data.json();
        console.log(res);
    }
    return (
        <form className="edit_blog" onSubmit={handleSubmit} > 
        <Link to="/">  
        <div className="back">
            <ArrowBackIcon />
        </div>
        </Link>  
            <div className="user">
                
        <Avatar className="avatar">{post.posted_by?.charAt(0)}</Avatar>
                <section>
            <input placeholder="name" value={post.posted_by} name="posted_by" onChange={handleChange} className="name" /> 
            <p className="date">posted at: {post.posted_at}</p>
                </section>
            </div>
            <input placeholder="topic" value={post.topic} name="topic" onChange={handleChange}/>
           <textarea value={post.description} name="description" placeholder="Description" onChange={handleChange}></textarea>

           <div className="save" type="submit" onClick={handleSubmit}>
                <CheckIcon />
            </div>  


        </form>
    )
}

export default AddBlog;