import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const createUUID = () => {
  const uuid = uuidv4();
  return uuid;
};

const JokeModal = ({ visible, onAddJoke, changeModalHandler }) => {
  const [text, setText] = useState("");

  const onClickAddHandler = () => {
    onAddJoke({ id: createUUID(), joke: text });
    changeModalHandler();
    setText("");
  };

  const onClickBackHandler = () => {
    changeModalHandler();
    setText("");
  };

  return (
    <Modal visible={visible}>
      <View style={styles.modal}>
        <Text style={styles.helperMessageText}>Please Enter Your Joke</Text>
        <TextInput
          multiline
          placeholder="Enter here:"
          placeholderTextColor="#FFF"
          value={text}
          style={styles.text}
          onChangeText={setText}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onClickAddHandler}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD JOKE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="backButton" onPress={onClickBackHandler}>
            <View style={styles.backButton}>
              <Text style={styles.addButtonText}>BACK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgb(20,100,150)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 200,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    color: "white",
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "green",
    width: 100,
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },

  helperMessageText: {
    fontSize: 24,
    color: "white",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  backButton: {
    backgroundColor: "rgb(150,0,0)",
    width: 100,
    borderRadius: 10,
  },
});

export default JokeModal;
