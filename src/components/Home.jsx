import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function Home(props) {
    return (
        <div>
           <Link to='./addblog'><button className="addblog">Add Post</button></Link> 
        </div>
    );
}

export default Home;