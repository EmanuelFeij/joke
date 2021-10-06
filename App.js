import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import JokeList from "./components/JokeList";
import JokeModal from "./components/JokeModal";

const Title = "JOKE SHARING";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [modalOn, setModal] = useState(false);
  const [jokes, setJokes] = useState([]);

  const changeModalHandler = () => {
    setModal((modalOn) => !modalOn);
  };

  const addJokeHandler = (joke) => {
    setJokes([...jokes, joke]);
  };

  let content;

  if (jokes.length === 0) {
    content = (
      <View style={styles.textContainer}>
        <Text style={styles.text}>NO JOKES YEST</Text>
      </View>
    );
  } else {
    content = (
      <View style={styles.listContainer}>
        <JokeList style={styles.jokeList} jokes={jokes} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={Title} activateModalHandler={changeModalHandler} />
      <Separator />

      {content}

      <JokeModal
        visible={modalOn}
        onAddJoke={addJokeHandler}
        changeModalHandler={changeModalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0,100,150)",
  },
  listContainer: {
    width: "90%",
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  textContainer: {
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
    height: "70%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
