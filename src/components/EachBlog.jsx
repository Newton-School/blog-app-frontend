import { Avatar } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EachBlog({match}) {


    const[blog,setBlog]=useState({
        _id:"",
        posted_at:"",
        posted_by:"",
        description:"",
        topic:""
    });

    const[loader,setLoader]=useState(false);

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
    const handleDelete=async()=>{
        const del=await fetch(`https://thawing-refuge-09946.herokuapp.com/delete/blog/${blog._id}`,{method:"delete"})
        const res=await del.json();
        alert(res.result)

    }

    return (
        loader?<h1>Loading...</h1>:
        <div className="blog"> 
        <Link to={{pathname:`/editblog/${blog?._id}`}}>
           <div className="Edit">
            <EditIcon />
        </div>
        </Link >
        <Link to={{pathname:`/`}}>
        <div className="delete" onClick={handleDelete}>
            <DeleteForeverIcon />
        </div>
        </Link>
        
            <Link to="/">  
        <div className="back">
            <ArrowBackIcon />
        </div>
        </Link>       
        

        <div className="user">
            
    <Avatar className="avatar">{blog?.posted_by?.charAt(0)}</Avatar>
            <section>
    <h1 className="name">{blog.posted_by}</h1>
    <p className="date">posted at: {blog.posted_at}</p>
            </section>
        </div>
    <p className="description">{blog.description}</p>
    </div>
    )
}

export default EachBlog;