import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import TouchableCard from "./TouchableCard";

const Joke = ({ joke }) => {
  const [jokeLikes, setJokeLikes] = useState(0);
  const onSinglePresser = () => setJokeLikes((jokeLikes) => jokeLikes + 1);

  const [dislikeCounter, setDislikeCounter] = useState(0);
  const onLongPresser = () =>
    setDislikeCounter((dislikeCounter) => dislikeCounter + 1);

  return (
    <TouchableCard
      onPress={onSinglePresser}
      delayLongPress={1000}
      onLongPress={onLongPresser}
    >
      <View style={styles.jokeTextContainer}>
        <Text style={styles.jokeText}>{joke}</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.likeCounterContainer}>
          <Text style={styles.likeCounter}>{jokeLikes}</Text>
        </View>
        <View style={styles.dislikeCounterContainer}>
          <Text style={styles.dislikeCounter}>{dislikeCounter}</Text>
        </View>
      </View>
    </TouchableCard>
  );
};

const styles = StyleSheet.create({
  jokeTextContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "black",
    padding: 8,
    marginVertical: 5,
  },
  jokeText: {
    color: "white",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  likeCounter: {
    textAlign: "center",
    margin: 2,
  },
  likeCounterContainer: {
    backgroundColor: "lightgreen",
    width: "15%",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  dislikeCounter: {
    textAlign: "center",
    margin: 2,
  },
  dislikeCounterContainer: {
    backgroundColor: "red",
    width: "15%",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default Joke;
