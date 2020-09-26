import React from 'react';

const EachBlog = (props) => {
    return (
        <>
            {props.arr.map((val, i) => (<div key={i} className="block">
                <span className="text">{val}</span>
                <button onClick={() => { props.editBlog(i) }}>Edit</button>
                <button onClick={() => { props.deletBlog(i) }}>Delete</button>
            </div>
            ))}
        </>)
}



export default EachBlog;