import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ADD JOKE" style={styles.addButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    width: "70%",
    alignItems: "center",
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 24
  },
  addButton: {
      width: "20%"
  },
});
export default Header;
