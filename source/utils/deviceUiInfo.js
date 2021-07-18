import { Platform, PixelRatio, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { isIphoneX } from 'react-native-iphone-x-helper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const width = screenHeight > screenWidth ? screenWidth : screenHeight;
const height = screenHeight < screenWidth ? screenWidth : screenHeight;

export default class DeviceUiInfo {
  static platform = Platform.OS;
  static screenSize = { width, height };
  static screenSizeWithPixelRatio = {
    width: width * PixelRatio.get(),
    height: height * PixelRatio.get(),
  };
  static guidelineBaseWidth = 350;
  static guidelineBaseHeight = 680;
  static isTablet = DeviceInfo.isTablet();
  static appVersion = DeviceInfo.getVersion();
  static isIphonex = isIphoneX();
  static isEmulator = DeviceInfo.isEmulator();
  static isIphone5 = !!(Platform.OS === 'ios' && height === 568 && width === 320);
  static iPhoneXBottomHeight = this.moderateScale(50);

  static init() {
    this.screenSize = { width, height: height };
    if (Platform.OS === 'ios' && height === 568 && width === 320) {
      this.isIphone5 = true;
    }
  }

  static getPlatform() {
    return this.platform;
  }
  static getScreenSize() {
    return this.screenSize;
  }
  static getScreenSizeWithPixelRatio() {
    return this.screenSizeWithPixelRatio;
  }

  static scale(size) {
    return (this.screenSize.width / this.guidelineBaseWidth) * size;
  }

  static verticalScale(size) {
    return ((this.screenSize.height - this.softBarHeight) / this.guidelineBaseHeight) * size;
  }

  static moderateScale(size, factor = 0.4) {
    return size + (this.scale(size) - size) * factor;
  }

  static widthPercentageToDP(widthPercent) {
    const screenWidth = width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  }

  static heightPercentageToDP(heightPercent) {
    const screenHeight = height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  }
}
