
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Content from "./src/components/Content";
import Post from "./src/components/post";
import React from "react";
import PasswordReset from "./src/components/PasswordReset";


export default function App() {
  return <View style ={styles.container}>
    <Header />
      <PasswordReset/>
    </View> 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  }
});
