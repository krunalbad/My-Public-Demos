import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const size = 25;

const marvellist = [
  {
    'Value': 'Iron Man',
    'Color': 'red'
  },
  {
    'Value': 'Hulk',
    'Color': 'green'
  },
  {
    'Value': 'Captain Ameria',
    'Color': 'blue'
  },
  {
    'Value': 'Thor',
    'Color': 'gold'
  },
  {
    'Value': 'Hawkeye',
    'Color': 'purple'
  },
  {
    'Value': 'Black Widow',
    'Color': 'brown'
  },
  {
    'Value': 'Loki',
    'Color': 'green'
  },
  {
    'Value': 'Scarlet Witch',
    'Color': 'red'
  },
  {
    'Value': 'Quick Silver',
    'Color': 'blue'
  },
  {
    'Value': 'Ultron',
    'Color': 'grey'
  },
]

export default class RNScrollView extends React.PureComponent {
  render() {
    return (
      <>
        <SafeAreaView style={styles.safecontainer}>
          <View style={styles.container}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {marvellist.map((data, key) => {
                return (
                  <>
                    <TouchableOpacity key={key} onPress={() => alert(data.Value)} >
                      <View
                        style={{
                          ...styles.view,
                          backgroundColor: data.Color,
                          marginRight: key == marvellist.length - 1 ? 10 : 0,
                        }}
                      >
                        <Text style={styles.text}>{data.Value}</Text>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: size + 10,
    padding: 3,
    paddingBottom: 0,
    paddingTop: 0,
  },
  view: {
    borderRadius: 25,
    marginLeft: 10,
    padding: size,
  },
  container: {
    marginTop: STATUSBAR_HEIGHT * 8,
    backgroundColor: 'white'
  },
});
