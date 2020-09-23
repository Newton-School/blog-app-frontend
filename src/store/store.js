import {createStore, applyMiddleware} from 'redux'
import blogReducer from './blogs/blogReducer'
import thunk from 'redux-thunk'

const store = createStore(blogReducer, applyMiddleware(thunk))
export default store