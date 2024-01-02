import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useBlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state: blogPosts } = useBlogContext();
  const post = blogPosts.find((post) => post.id === navigation.getParam("id"));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput onChangeText={setTitle} value={title} />

      <Text style={styles.label}>Edit Content:</Text>
      <TextInput onChangeText={setContent} value={content} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditScreen;
