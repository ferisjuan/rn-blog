import { StyleSheet } from "react-native";
import { useBlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state: blogPosts, editPost } = useBlogContext()
  const post = blogPosts.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={post}
      onSubmit={(content, title) => editPost({ id, content, title }, () => navigation.pop())}
    />
  );
}

const styles = StyleSheet.create({});

export default EditScreen;
