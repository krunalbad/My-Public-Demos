import { AppRegistry, YellowBox, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const warnArray = [
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Warning',
  'RNDeviceInfo',
  'Warning: An update',
  'Deprecation warning',
  'Require cycle:',
  'Warning: ...',
  'Warning: Each',
  'Remote debugger',
];
console.disableYellowBox = true;
console.ignoredYellowBox = warnArray;
YellowBox.ignoreWarnings(warnArray);
LogBox.ignoreLogs(warnArray);

AppRegistry.registerComponent(appName, () => App);