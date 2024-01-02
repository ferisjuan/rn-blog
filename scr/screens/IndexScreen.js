import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { useBlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, deletePost, getPosts } = useBlogContext();

  useEffect(() => {
    getPosts();

    const listener = navigation.addListener("didFocus", () => getPosts());

    return () => {
      listener.remove();
    }
  }, [])

  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
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
