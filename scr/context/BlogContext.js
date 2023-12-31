import { useContext } from "react";
import CreateDataContext from "../context/createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [
        ...state,
        {
          title: `Blog Post #${state.length + 1}`,
        }
      ];
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => () => dispatch({ type: "add_blog_post" })

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost },
  []
)

export const useBlogContext = () => useContext(Context)
