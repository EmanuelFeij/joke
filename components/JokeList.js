import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Joke from "./Joke";

const JokeList = ({ jokes }) => {

  const renderItem = ({ item }) => (
    <Joke joke={item.joke} style={styles.joke}/>
  )
  return (
    <View style={styles.container}>
      <FlatList
      style={styles.fList}
        data={jokes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    justifyContent: 'space-around',
    alignItems: 'center',
    height: "88%",
    padding:5
  },
  fList:{
    width:"100%",
    height:"100%"
  },
});

export default JokeList;
