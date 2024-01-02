import { useContext } from "react";
import CreateDataContext from "../context/createDataContext";

import jsonServer from "../api/jsonServer"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blog_post":
      return state.filter((post) => post.id !== action.payload);
    case "edit_blog_post":
      return state.map((post) => (post.id === action.payload.id)
        ? action.payload
        : post
      )
    case "get_blogposts":
      return action.payload
    default:
      return state;
  }
}

const getPosts = dispatch => async () => {
  const response = await jsonServer.get("/blogposts")

  dispatch({
    type: "get_blogposts",
    payload: response.data
  })
}

const addBlogPost = () => async (content, title, callback) => {
  await jsonServer.post("/blogposts", { title, content })

  if (callback) {
    callback()
  }
}

const deletePost = (dispatch) => async (id) => {
  await jsonServer.delete(`/blogposts/${id}`)

  dispatch({ type: "delete_blog_post", payload: id })
}

const editPost = (dispatch) => async (post, callback) => {
  await jsonServer.put(`/blogposts/${post.id}`, { title: post.title, content: post.content })

  dispatch({ type: "edit_blog_post", payload: post })

  if (callback) {
    callback()
  }
}

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost, getPosts },
  []
)

export const useBlogContext = () => useContext(Context)
