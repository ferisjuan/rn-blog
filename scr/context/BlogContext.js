import { useContext } from "react";
import CreateDataContext from "../context/createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        }
      ];
    case "delete_blog_post":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => () => dispatch({ type: "add_blog_post" })
const deletePost = (dispatch) => (id) => dispatch({ type: "delete_blog_post", payload: id })

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deletePost },
  []
)

export const useBlogContext = () => useContext(Context)
