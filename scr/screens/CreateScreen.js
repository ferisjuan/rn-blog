import { StyleSheet } from "react-native";

import { useBlogContext } from "../context/BlogContext";
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useBlogContext();

  const onSubmit = (content, title) => {
    addBlogPost(content, title, () => {
      navigation.navigate('Index');
    });
  }

  return (
    <BlogPostForm
      onSubmit={onSubmit}
    />
  );
}

const styles = StyleSheet.create({});

export default CreateScreen;
