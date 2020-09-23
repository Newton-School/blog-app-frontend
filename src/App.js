import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import EachBlog from './components/EachBlog';
import {Provider} from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/addblog" component={AddBlog}></Route>
        <Route path="/editblog/:id" component={EditBlog}></Route>
        <Route path="/blog/:id" component={EachBlog}></Route>
      </div>
    </Provider>
  );
}

export default App;
