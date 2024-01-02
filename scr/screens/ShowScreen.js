import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useBlogContext } from "../context/BlogContext";

import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state: blogPosts } = useBlogContext();

  const id = navigation.getParam("id");
  const blogPost = blogPosts.find((post) => post.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={
      () =>
        navigation.navigate('Edit', { id: navigation.getParam('id') })
    }>
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({});

export default ShowScreen;
