import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import JokeList from "./components/JokeList";

const Title = "Temp Name";

export default function App() {
  const [jokes, setJokes] = useState([{id:"1", joke:"first"}])

  const addJokeHandler = (joke) => {
    setJokes([...jokes, joke]);
  }

  return (
    <View style={styles.container}>
      <Header title={Title}/>
      <JokeList style={styles.jokeList} jokes={jokes}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jokeList:{
    width:'80%'
  }
});
