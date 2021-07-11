import React from 'react';
import { Text, View } from 'react-native';
// https://ethercreative.github.io/react-native-shadow-generator/
export default function App() {
  return (
    <View
      style={{

        margin: 50,
        marginTop: 200,
        backgroundColor: 'white',
        padding: 30,

        //shadow code
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        //shadow code

      }}
    >
      <Text style={{ textAlign: 'center' }}>Hey! I am a card. Huraayy</Text>
    </View>
  );
}

