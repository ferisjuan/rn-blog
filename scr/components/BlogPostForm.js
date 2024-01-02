import { useState } from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues?.title);
  const [content, setContent] = useState(initialValues?.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setTitle}
        style={styles.input}
        value={title}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        onChangeText={setContent}
        style={styles.input}
        value={content}
      />

      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(content, title)}
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 10
  }
});

export default BlogPostForm;
