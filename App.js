import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  PanResponder,
  Animated,
} from "react-native";
import Orientation from 'react-native-orientation-locker';

import Video from "react-native-video";

import Lights from "./batman.mov";

const { width: defaultWidth, height: defaultHeight } = Dimensions.get("window");


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: defaultWidth,
      screenHeight: defaultHeight,
      isPortrait: true
    }
  }

  UNSAFE_componentWillMount() {
    this._y = 0;
    this._animation = new Animated.Value(0);
    this._animation.addListener(({ value }) => {
      this._y = value;
    })

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dy: this._animation,
        },
      ]),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(this._animation, {
            toValue: 300,
            duration: 200,
          }).start();
          this._animation.setOffset(300);
        } else {
          this._animation.setOffset(0);
          Animated.timing(this._animation, {
            toValue: 0,
            duration: 200,
          }).start();
        }
      },
    });
  }

  componentDidMount() {
    this.listenOrientationChange();
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }

  _onOrientationDidChange = (orientation) => {
    if (orientation && !!orientation && orientation.includes('LANDSCAPE')) {
      this.setState({
        isPortrait: false
      })
      return;
    }
    this.setState({
      isPortrait: true
    })
  };


  componentWillUnmount() {
    this.removeOrientationListener();
    Orientation.removeOrientationListener(this._onOrientationDidChange);

  }

  listenOrientationChange = (that = null) => {
    Dimensions.addEventListener('change', (newDimensions) => {
      this.setState({
        screenWidth: newDimensions.window.width,
        screenHeight: newDimensions.window.height
      })
    });
  };

  removeOrientationListener = () => {
    this.setState({
      screenWidth: defaultWidth,
      screenHeight: defaultHeight
    })
    Dimensions.removeEventListener('change', () => { });
  };


  handleOpen = () => {
    this._animation.setOffset(0);
    Animated.timing(this._animation, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  render() {
    const { screenHeight, screenWidth: width, isPortrait } = this.state
    const height = width * (isPortrait ? 0.5625 : 0.5625 / 2);

    const opacityInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0],
    });

    const translateYInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [0, screenHeight - (isPortrait ? height : height / 1.3)],
      extrapolate: "clamp",
    });

    const scaleInterpolate = this._animation.interpolate({
      inputRange: [0, 150],
      outputRange: [1, isPortrait ? 0.5 : 0.3],
      extrapolate: "clamp",
    });

    const translateXInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [0, isPortrait ? 85 : 250],
      extrapolate: "clamp",
    });

    const scrollStyles = {
      opacity: opacityInterpolate,
      transform: [
        {
          translateY: translateYInterpolate,
        },
      ],
    };

    const videoStyles = {
      transform: [
        {
          translateY: translateYInterpolate,
        },
        {
          translateX: translateXInterpolate,
        },
        {
          scale: scaleInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOpen}>
          <Text>View Batman Trailer Again in Original View</Text>
        </TouchableOpacity>
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          <Animated.View
            style={[{ width, height }, videoStyles]}
            {...this._panResponder.panHandlers}
          >
            <Video
              repeat
              controls
              style={StyleSheet.absoluteFill}
              source={Lights}
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.ScrollView style={[styles.scrollView, scrollStyles]}>

            <View style={[styles.topContent, styles.padding]}>
              <Text style={styles.title}>The Batman 2021: Vengance</Text>
              <Text>1M Views</Text>
              <View style={styles.likeRow}>
                <TouchableIcon name="thumbs-up">10,000</TouchableIcon>
                <TouchableIcon name="thumbs-down">3</TouchableIcon>
                <TouchableIcon name="share">Share</TouchableIcon>
                <TouchableIcon name="download">Save</TouchableIcon>
                <TouchableIcon name="plus">Add to</TouchableIcon>
              </View>
            </View>

            <View style={[styles.channelInfo, styles.padding]}>
              <View style={styles.channelText}>
                <Text style={styles.channelTitle}>Krunal Badami</Text>
                <Text>1M Subscribers</Text>
                <Text>Inspired by Jason Brown</Text>
              </View>
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}

const TouchableIcon = ({ name, children }) => {
  return (
    <TouchableOpacity style={styles.touchIcon}>
      <Text style={styles.iconText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  touchIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    marginTop: 5,
  },
  title: {
    fontSize: 28,
  },
  likeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  padding: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  channelInfo: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  channelIcon: {
    width: 50,
    height: 50,
  },
  channelText: {
    marginLeft: 15,
  },
  channelTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  playlistUpNext: {
    fontSize: 24,
  },
  playlistVideo: {
    flexDirection: "row",
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },
  playlistThumbnail: {
    width: null,
    height: null,
    flex: 1,
  },
  playlistText: {
    flex: 2,
    paddingLeft: 15,
  },
  playlistVideoTitle: {
    fontSize: 18,
  },
  playlistSubText: {
    color: "#555",
  },
});


export default App