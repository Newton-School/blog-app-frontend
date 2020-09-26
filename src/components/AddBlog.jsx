import React, { useState } from "react";
import "./styles.css";
function AddBlog(props) {
  const [blog, setblog] = useState({
    Title: "",
    Content: "",
  });
  const [data, setdata] = useState([]);
const [hide,sethide]=useState(true);


const handleChange = (e) => {
    e.preventDefault();
    if (blog !== null) {
      setdata([
        ...data,
        {
          Titles: blog.Title,
          items: blog.Content,
          id: Date.now(),
        },
      ]);
    }

    console.log(data);
    setblog({
      Title: "",
      Content: "",
    });
   
  };

  const deleteItem = (id) => {
    const items = data.filter((item) => item.id !== id);
    setdata(items);
  };
  const edititem = (id) => {
    const items = data.find((item) => item.id === id);
    setblog({
      Title: items.Titles,
      Content: items.items,
    });
    const lists = data.filter((list) => list.id !== id);
    setdata(lists);
  };

  const hideform = () =>{
    sethide(!hide);
  }
  const hidebtn = () => {
    sethide(!hide);
  }

  return (
    <div>
        {
            hide?<form>
            <div className="form">
              <input
                placeholder="Title"
                type="text"
                value={blog.Title}
                onChange={(e) => {
                  setblog({ ...blog, Title: e.target.value });
                }}
              />
    
              <textarea
                placeholder="Content"
                type="text"
                value={blog.Content}
                onChange={(e) => {
                  setblog({ ...blog, Content: e.target.value });
                }}
              />
              <span>
                {" "}
                <button className="save" onClick={handleChange}>
                  Save
                </button>
                <button className="cancel" onClick={hideform}>Cancel</button>
              </span>
            </div>
          </form>:<button className="addblog" onClick={hidebtn}>Add Post</button>
        }
      
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.Titles}</h2>
            <p>{item.items}</p>
            <span>
              <button className="edit" onClick={() => edititem(item.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteItem(item.id)}>
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddBlog;
