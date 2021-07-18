import { StyleSheet, BackHandler } from "react-native";

import DeviceUiInfo from '@utils/deviceUiInfo'
import { Metrics } from '@themes'

const { margins } = Metrics

export const styles = StyleSheet.create({
  image: {
    // width: DeviceUiInfo.moderateScale(150),
    height: DeviceUiInfo.moderateScale(32),
    resizeMode: 'contain',
    ...{ ...margins.mL5 },
    alignSelf: 'center'
  }
})