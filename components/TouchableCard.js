import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const TouchableCard = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.card, ...style }}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    //ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    //android
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default TouchableCard;
