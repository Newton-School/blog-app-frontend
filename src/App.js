import React from 'react';
import './components/styles.css';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import EachBlog from './components/EachBlog';

function App() {
  return (
    <div className="App">
       <div className="header">Blog</div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/addblog" component={AddBlog}></Route>
      <Route path="/editblog/:id" component={EditBlog}></Route>
      <Route path="/blog/:id" component={EachBlog}></Route>
    </div>
  );
}

export default App;
