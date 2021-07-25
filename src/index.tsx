import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Snapchat from "./Snapchat";
import StoryComp from "./Story";
import { SnapchatRoutes } from "./Model";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator<SnapchatRoutes>();
const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }}
      mode="modal"
    >
      <Stack.Screen name="Snapchat" component={Snapchat} />
      <Stack.Screen name="Story" component={StoryComp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
