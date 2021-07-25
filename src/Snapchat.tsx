import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Story } from "./Model";
import StoryThumbnail from "./StoryThumbnail";

export const stories: Story[] = [
  {
    id: "2",
    source: require("./assets/stories/1.jpg"),
    user: "derek.russel",
  },
  {
    id: "4",
    source: require("./assets/stories/2.jpg"),
    user: "jmitch",
  },
  {
    id: "7",
    source: require("./assets/stories/3.jpg"),
    user: "andrea.schmidt",
  },
  {
    id: "5",
    source: require("./assets/stories/4.jpg"),
    user: "monicaa",
  },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

const Snapchat = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {stories.map((story) => (
            <StoryThumbnail key={story.id} story={story} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Snapchat;
