import { View, StyleSheet, Text } from "react-native";
import { useBlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state: blogPosts } = useBlogContext();

  const id = navigation.getParam("id");
  const blogPost = blogPosts.find((post) => post.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;
