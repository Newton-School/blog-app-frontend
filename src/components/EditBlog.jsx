import { Avatar} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function EditBlog({match}) {
    const[blog,setBlog]=useState({
        _id:"",
        posted_at:"",
        posted_by:"",
        description:"",
        topic:""
    });

    const[loader,setLoader]=useState(false);



    const handleChange=(e)=>{
        const{name,value}=e.target;
        setBlog(prev=>{
            return{...prev,[name]:value}
        })

    }
    useEffect(() => {
        const fetchdata=async()=>{
        setLoader(true)
        const del=await fetch(`https://thawing-refuge-09946.herokuapp.com/allblog/${match.params.id}`)
        const res=await del.json();
        setBlog(res.result);
        console.log(res);
        console.log(blog);
        setLoader(false)
        }
        fetchdata()
        return () => {
            // 
        }
    }, [])

    const handleSubmit=async()=>{


        const send=await fetch(`https://thawing-refuge-09946.herokuapp.com/update/blog/${blog?._id}`,
                            {method:"put",headers:{"Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json",},
                            body:JSON.stringify({blog})})
        const resp=await send.json();
        setBlog(resp.result)
        console.log(resp);
    }
    return (
        loader?<h1>Loading..</h1>:
        <form className="edit_blog" onSubmit={handleSubmit} > 
        <Link to={{pathname:`/blog/${blog._id}`,blog:blog}}>  
        <div className="back">
            <ArrowBackIcon />
        </div>
        </Link>  
            <div className="user">
                
            <Avatar className="avatar">{blog?.posted_by?.charAt(0)}</Avatar>
                <section>
                <h1 className="name">{blog?.posted_by}</h1>
                <p className="date">posted at: {blog?.posted_at}</p>
                </section>
            </div>
           <textarea name="edit_description" value={blog.description} name="description" onChange={handleChange}></textarea>

           <div className="save" type="submit" onClick={handleSubmit}>
                <CheckIcon />
            </div>  


        </form>
    )
}

export default EditBlog;