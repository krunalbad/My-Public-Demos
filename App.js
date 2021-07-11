import 'react-native-gesture-handler'
import * as React from 'react';
import { AppRegistry, Button, View, Text, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { inject, observer } from 'mobx-react';
import { Provider } from 'mobx-react';

import { name as appName } from './app.json';
import TodoStore from './MobXStore';

const Stack = createStackNavigator();
console.disableYellowBox = true;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  onChangeText = (value) => {

  }

  render() {
    const { navigation, value } = this.props
    return (
      <>
        <SafeAreaView style={{ padding: 10, paddingTop: 20 }}>

          <TextInput
            // onChangeText={text => onChangeText(text)}
            // value={value}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
            placeholder={'Add Todo'}
          />

        </SafeAreaView>
      </>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <>
        <SafeAreaView>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.goBack(null)}
          />
        </SafeAreaView>
      </>
    );
  }
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const Root = (
  <>
    {/* <Provider TodoStore={TodoStore}> */}
    <App />
    {/* </Provider> */}
  </>
);

AppRegistry.registerComponent(appName, () => Root);