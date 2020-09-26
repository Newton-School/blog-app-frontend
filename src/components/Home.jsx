import React, { useState } from 'react';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import EachBlog from './EachBlog';
import Pagination from './Pagination';

const Home = () => {
    let [blog, setBlog] = useState('');
    let [arr, setArr] = useState([]);
    let [currPage,setCurrPage]=useState(1);
    let [postPerPage,SetPostPerPage]=useState(3);

    const submit = (e) => {
        e.preventDefault();
        setArr([...arr, blog]);
    };

    const blogCreating = (e) => {
        setBlog(e.target.value);

    };

    const editBlog = (e) => {
        console.log(e);
    };

    const deletBlog = (e) => {
        arr.splice(e, 1);
        setArr([...arr]);
    };

    const paginate=(num)=>{
        setCurrPage(num);
    };
    
    //get cuurent page
    const indexOfLastPage=currPage*postPerPage;
    const indexOfFirstPage=indexOfLastPage-postPerPage;
    const currPost=arr.slice(indexOfFirstPage,indexOfLastPage);

    return (
        <>
            <h1>Home</h1>
            <div className="center">
                <AddBlog blogCreating={blogCreating} submit={submit} />
                <EachBlog arr={currPost} deletBlog={deletBlog} editBlog={editBlog} />
                <Pagination postPerPage={postPerPage} totalPosts={arr.length} paginate={paginate}/>
            </div>
        </>)
}

export default Home;