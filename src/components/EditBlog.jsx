import { Avatar} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function EditBlog(props) {
    const{_id,posted_at,posted_by,description,topic}=props?.location?.blog;
    const[NewDescription,setDescription]=useState(description)



    const handleChange=(e)=>{
        console.log(e.target.value);
        setDescription(e.target.value)
    }
    const [blog, setBlog] = useState()
    useEffect(() => {
        setBlog(props?.location?.blog);
        return () => {
            // 
        }
    }, [])

    const handleSubmit=async()=>{


        const send=await fetch(`/update/blog/${_id}`,
                            {method:"put",headers:{"Access-Control-Allow-Origin": "*",
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json",},
                            body:JSON.stringify({description:NewDescription})})
        const resp=await send.json();
        setBlog(resp.result)
        console.log(resp);
    }
    return (
        <form className="edit_blog" onSubmit={handleSubmit} > 
        <Link to={{pathname:`/blog/${_id}`,blog:blog}}>  
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
           <textarea name="edit_description" value={NewDescription} onChange={handleChange}></textarea>

           <div className="save" type="submit" onClick={handleSubmit}>
                <CheckIcon />
            </div>  


        </form>
    )
}

export default EditBlog;