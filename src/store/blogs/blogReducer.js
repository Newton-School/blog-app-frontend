import {GET_BLOGS, ADD_BLOG, EDIT_BLOG, DELETE_BLOG} from './blogTypes'

let INITIAL_STATE = [
    {
        id: 1,
        topic: "Main Title 1",
        description: "Topic Description 1",
        posted_at: "22-09-2020",
        posted_by: "Abhishek Prashant"
    },
    {
        id: 2,
        topic: "Main Title 2",
        description: "Topic Description 2",
        posted_at: "21-09-2020",
        posted_by: "Abhishek Prashant"
    },
    {
        id: 3,
        topic: "Main Title 3",
        description: "Topic Description 3",
        posted_at: "20-09-2020",
        posted_by: "Abhishek Prashant"
    },
    {
        id: 4,
        topic: "Main Title 4",
        description: "Topic Description 4",
        posted_at: "19-09-2020",
        posted_by: "Abhishek Prashant"
    },
    {
        id: 5,
        topic: "Main Title 5",
        description: "Topic Description 5",
        posted_at: "18-09-2020",
        posted_by: "Abhishek Prashant"
    },
]

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return action.payload
        case ADD_BLOG:
            return state.concat(action.payload)
        case EDIT_BLOG:
            console.log("Editing", action.payload)
            return state.map(blog => blog.id === action.payload.id? action.payload: blog)
        case DELETE_BLOG:
            return state.filter(blog => blog.id !== action.payload.id)
        default:
            return state
    }
}

export default blogReducer