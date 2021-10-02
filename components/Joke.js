import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import TouchableCard from "./TouchableCard"


const Joke = ({ joke }) => {
  return (
    <TouchableCard style={styles.jokeStyle}>
      <Pressable onPress={console.log("kk")}>
        <Text>{joke}</Text>
      </Pressable>
    </TouchableCard>
  );
};

const styles = StyleSheet.create({
  jokeStyle: {},
});

export default Joke;
