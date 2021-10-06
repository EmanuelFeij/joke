import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ title, activateModalHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={activateModalHandler}>
        <View style={styles.addButton}>
          <Text style={styles.title}>ADD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "lightblue",
    padding: 6
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  addButton: {
    padding: 6,
    backgroundColor: "lightblue",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
});
export default Header;
