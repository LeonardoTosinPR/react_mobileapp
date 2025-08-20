
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Content from "./src/components/Content";
import Post from "./src/components/post";


export default function App() {
  let car = {
        name: ["fusca","nivus", "polo", "sedan"],
        brand:"VW",
        Hp: [150, 180, 150, 200]
    }
  return <View style ={styles.container}>
    <Header />
    <Content />
    <Post author="@fulano" content="post 1" />
    <Post author="@ciclano" content="post 2"/>
    <Post author="@beltrano" content="post 3"/>
    <Post author="@prof.Andres" content="post 4"/>
    <Footer />
  </View> 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
