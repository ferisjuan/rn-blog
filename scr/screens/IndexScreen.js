import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { useBlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state: blogPosts, addBlogPost } = useBlogContext();

  return (
    <View>
      <Button onPress={addBlogPost} title="Add Post" />
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Feather name="trash" style={styles.icon} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  }
});

export default IndexScreen;
