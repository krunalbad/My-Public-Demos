import { StyleSheet } from 'react-native';

import DeviceUiInfo from '@utils/deviceUiInfo';
import { Colors, Fonts, Metrics } from '@themes';

const { white } = Colors;
const { fontType, type, size } = Fonts;
const { paddings, margins } = Metrics;

export const styles = StyleSheet.create({
  tabContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...{ ...paddings.pB0 },
  },
  tab: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'transparent',
    // ...{ ...(DeviceUiInfo.isTablet) ? paddings.pB20 : paddings.pB0 }
    // width:100
  },
  tabs: {
    // height: (DeviceUiInfo.isTablet) ? DeviceUiInfo.moderateScale(70) : DeviceUiInfo.moderateScale(50),
    flexDirection: 'row',
    borderWidth: 0.7,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    ...{ ...paddings.pH20 },
  },
  icon: {
    fontSize: DeviceUiInfo.isTablet ? 17 : 20,
  },
  titleText: {
    fontSize: DeviceUiInfo.isTablet ? 12 : 16,
    fontWeight: '700',
    lineHeight: DeviceUiInfo.moderateScale(14),
  },
});
