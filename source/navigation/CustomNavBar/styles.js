import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@themes';
// import DeviceUiInfo from '@utils/deviceUiInfo';

// const { moderateScale } = DeviceUiInfo;
const { white, background, transparent } = Colors;
const { size } = Fonts;
const { paddings } = Metrics;

export const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowColor: transparent,
    backgroundColor: background,
    borderBottomWidth: 0,
    paddingTop: 0,
    height: 44,
  },
  headerContainer: {
    backgroundColor: background,
  },
  left: {
    flex: 0.5,
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    width: 40,
    ...{ ...paddings.pL5 },
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...{ ...paddings.pR5 },
  },
  iconStyle: {
    fontSize: 20,
    color: white,
  },
  rightIconStyle: {
    fontSize: size.h20,
    color: white,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: white,
    fontSize: size.h15,
    alignSelf: 'center',
    textAlign: 'center',
  },
  titleTextStyle: {
    color: white,
    fontSize: size.h15,
    textAlign: 'left',
  },
  logoStyle: {
    fontSize: size.h33,
    alignSelf: 'center',
    color: white,
  },
  right: {
    flex: 0.5,
  },
});
