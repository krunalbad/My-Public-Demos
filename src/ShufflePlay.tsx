import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

export default () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[...Array(15)].map((track, key) => (
      <View key={`${key}_track`} style={styles.button}>
        <Text style={styles.label}>Season {key + 1}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "yellow",
    height: BUTTON_HEIGHT / 2,
    width: BUTTON_WIDTH / 2,
    marginHorizontal: 10,
    borderRadius: 32,
    justifyContent: "center",
  },
  label: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});
