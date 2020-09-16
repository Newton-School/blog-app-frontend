import { Avatar } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import React from 'react';
import { Link } from 'react-router-dom';

function EachBlog(props) {


    const{_id,posted_at,posted_by,description,topic}=props?.location?.blog;

    const handleDelete=async()=>{
        const del=await fetch(`/delete/blog/${_id}`,{method:"delete"})
        const res=await del.json();
        alert(res.result)

    }

    return (
        <div className="blog"> 
        <Link to={{pathname:`/editblog/${_id}`,blog:props.location.blog}}>
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
            
    <Avatar className="avatar">{posted_by.charAt(0)}</Avatar>
            <section>
    <h1 className="name">{posted_by}</h1>
    <p className="date">posted at: {posted_at}</p>
            </section>
        </div>
    <p className="description">{description}</p>
    </div>
    )
}

export default EachBlog;