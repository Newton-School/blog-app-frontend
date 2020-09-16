import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';
function Home() {
    const[page,setPage]=useState(1);
    const[blogs,setBlogs]=useState([]);
    const[loader,setLoader]=useState(false);
    const[otherData,setData]=useState({})
    const last=5;
    useEffect(() => {
        window.scrollTo(0,0)
        const getPosts=async()=>{
        setLoader(true)
        const data=await fetch(`https://thawing-refuge-09946.herokuapp.com/allblog?page=${page}`)
        const pure=await data.json()
        console.log(pure);
        setData(pure)
        setBlogs(pure.result)
        setLoader(false);
        }
        getPosts();
        return () => {
            // cleanup
        }
    }, [page])
    return (
        loader?<h1>Loading...</h1>:
        <div className="main">

        
        <div className="Add">
        <Link to="/addblog">  
            <AddIcon />
        </Link>
        </div>
          {blogs.map(blog=>{
         return(
        <Link to={{pathname:`/blog/${blog._id}`,blog:blog}} key={blog._id}>
        <div className="blog"> 

            <div className="user">
                
                <Avatar className="avatar">{blog.posted_by.charAt(0)}</Avatar>
                <section>
                <h1 className="name">{blog.posted_by}</h1>
                <p className="date">posted at: {blog.posted_at}</p>
                </section>
            </div>
            <p className="description">{blog.description}</p>
        </div>
        </Link>
         )})}
        
        <div className="paging">
            
            {[...Array(otherData?.size?.next).keys()].map(index=>{
                return <div className="page__no" key={index} onClick={()=>setPage(index+1)}>{index+1}</div>
            })}
        </div>

        </div>
    )
}

export default Home;