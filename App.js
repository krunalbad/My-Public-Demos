import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {get, isNumber, map} from 'lodash';
import {Text, View} from 'react-native';
import Video from 'react-native-video';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalData: Array(100),
    };
  }

  itemReplacer = (array, oldItem, newItem) =>
    map(array, item => (item === oldItem ? newItem : item));

  renderItem = ({item}) => {
    return (
      <View>
        <Video
          controls={false}
          currentTime={20}
          source={require('./BigBuckBunny.mp4')}
          paused={!item}
          resizeMode={'cover'}
          style={{flex: 1, aspectRatio: 1}}
        />
        <View
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 50,
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: 'white',
            }}>
            {!item ? 'Paused' : 'Playing'}
          </Text>
        </View>
      </View>
    );
  };

  onViewableItemsChanged = props => {
    const viewableItems = get(props, 'viewableItems[0].index');
    if (isNumber(viewableItems)) {
      let finalData = this.state.finalData;
      finalData = this.itemReplacer(finalData, true, undefined);
      finalData[viewableItems] = true;
      this.setState({
        finalData,
      });
    }
  };

  render() {
    return (
      <FlashList
        data={this.state.finalData}
        extraData={{finalData: this.state.finalData}}
        renderItem={this.renderItem}
        estimatedItemSize={200}
        onViewableItemsChanged={this.onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 100,
        }}
      />
    );
  }
}

export default App;
