import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

const TouchableCard = ({ onPress, children, onLongPress , style}) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.card}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    //ios
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    //android
    elevation: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    margin:10,
  },
});

export default TouchableCard;
