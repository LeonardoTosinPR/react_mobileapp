import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type PostProps = {
  author: string;
  content: string;
};
export default function Post(props: PostProps) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{props.author} </Text>
      <Text>{props.content}</Text>
      <Button
        title="likes"
        onPress={() => {
          setLikes(likes + 1);
        }}
      />
      <Text>number of likes: {likes}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
