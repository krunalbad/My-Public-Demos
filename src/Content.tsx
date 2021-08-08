import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Animated from "react-native-reanimated";
import { onScroll } from "react-native-redash";

import { Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from "./Model";
import Track from "./Track";
import ShufflePlay, { BUTTON_HEIGHT, BUTTON_WIDTH } from "./ShufflePlay";
import Header from "./Header";
import LinearGradient from "react-native-linear-gradient";

interface ContentProps {
  album: Album;
  y: Animated.Value<number>;
}

const { interpolateNode, Extrapolate } = Animated;

export default ({ album: { artist, tracks }, y }: ContentProps) => {
  const height = interpolateNode(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 1],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.ScrollView
      onScroll={onScroll({ y })}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}>
        <Animated.View style={[styles.gradient, { height }]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
          />
        </Animated.View>
        <View style={styles.artistContainer}>
          <View
            style={{
              flex: 1,
              zIndex: 9,
              justifyContent: "flex-end",
              marginBottom: 90,
            }}
          >
            <Animated.Text style={[styles.artist, { opacity }]}>
              {artist}
            </Animated.Text>
            <Animated.Text style={[styles.artistDesc, { opacity }]}>
              {`This demo is inspired by William Candillon's Spotify Header Tutorial Season 2.\n\nAlso this demo contains a the show list design of Snapchat.`}
            </Animated.Text>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Header {...{ y, artist }} />
        <ShufflePlay />
      </View>
      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <Track key={key} index={key + 1} {...{ track, key, artist }} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 32,
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  artistDesc: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    margin: 20,
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: "black",
  },
});
