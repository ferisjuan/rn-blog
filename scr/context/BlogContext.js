import { useContext } from "react";
import CreateDataContext from "../context/createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "delete_blog_post":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => (content, title, callback) => {
  dispatch({
    type: "add_blog_post",
    payload: { content, title },
  })

  callback()
}

const deletePost = (dispatch) => (id) => dispatch({ type: "delete_blog_post", payload: id })

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deletePost },
  [{ title: "test title", content: "test content", id: 1 }],
)

export const useBlogContext = () => useContext(Context)
