import { Dimensions, Platform } from 'react-native';
// import DeviceUiInfo from '@utils/deviceUiInfo';
// const { moderateScale } = DeviceUiInfo;
const { width, height } = Dimensions.get('window');
// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 56,
  paddings: {
    p0: { padding: 0 },
    p2: { padding: 2 },
    p5: { padding: 5 },
    p8: { padding: 8 },
    p10: { padding: 10 },
    p15: { padding: 15 },
    p20: { padding: 20 },
    p25: { padding: 25 },
    p30: { padding: 30 },
    pL0: { paddingLeft: 0 },
    pL2: { paddingLeft: 2 },
    pL5: { paddingLeft: 5 },
    pL8: { paddingLeft: 8 },
    pL10: { paddingLeft: 10 },
    pL15: { paddingLeft: 15 },
    pL20: { paddingLeft: 20 },
    pL25: { paddingLeft: 25 },
    pL30: { paddingLeft: 30 },
    pR0: { paddingRight: 0 },
    pR2: { paddingLeft: 2 },
    pR5: { paddingRight: 5 },
    pR8: { paddingRight: 8 },
    pR10: { paddingRight: 10 },
    pR15: { paddingRight: 15 },
    pR20: { paddingRight: 20 },
    pR25: { paddingRight: 25 },
    pR30: { paddingRight: 30 },
    pT0: { paddingTop: 0 },
    pT2: { paddingTop: 2 },
    pT5: { paddingTop: 5 },
    pT8: { paddingTop: 8 },
    pT10: { paddingTop: 10 },
    pT12: { paddingTop: 12 },
    pT15: { paddingTop: 15 },
    pT18: { paddingTop: 18 },
    pT20: { paddingTop: 20 },
    pT21: { paddingTop: 21 },
    pT24: { paddingTop: 24 },
    pT25: { paddingTop: 25 },
    pT30: { paddingTop: 30 },
    pT40: { paddingTop: 40 },
    pT50: { paddingTop: 50 },
    pB0: { paddingBottom: 0 },
    pB2: { paddingTop: 2 },
    pB3: { paddingTop: 3 },
    pB5: { paddingBottom: 5 },
    pB8: { paddingBottom: 8 },
    pB9: { paddingBottom: 9 },
    pB10: { paddingBottom: 10 },
    pB12: { paddingBottom: 12 },
    pB15: { paddingBottom: 15 },
    pB18: { paddingBottom: 18 },
    pB20: { paddingBottom: 20 },
    pB21: { paddingBottom: 21 },
    pB24: { paddingBottom: 24 },
    pB25: { paddingBottom: 25 },
    pB27: { paddingBottom: 27 },
    pB30: { paddingBottom: 30 },
    pB60: { paddingBottom: 60 },
    pH0: { paddingHorizontal: 0 },
    pH5: { paddingHorizontal: 5 },
    pH10: { paddingHorizontal: 10 },
    pH15: { paddingHorizontal: 15 },
    pH20: { paddingHorizontal: 20 },
    pH25: { paddingHorizontal: 25 },
    pH30: { paddingHorizontal: 30 },
    pH35: { paddingHorizontal: 35 },
    pH40: { paddingHorizontal: 40 },
    pV0: { paddingVertical: 0 },
    pV2: { paddingVertical: 2 },
    pV5: { paddingVertical: 5 },
    pV10: { paddingVertical: 10 },
    pV15: { paddingVertical: 15 },
    pV20: { paddingVertical: 20 },
    pV25: { paddingVertical: 25 },
    pV30: { paddingVertical: 30 },
  },
  margins: {
    m0: { margin: 0 },
    m5: { margin: 5 },
    m10: { margin: 10 },
    m15: { margin: 15 },
    m20: { margin: 20 },
    m25: { margin: 25 },
    m30: { margin: 30 },
    mL0: { marginLeft: 0 },
    mL2: { marginLeft: 2 },
    mL5: { marginLeft: 5 },
    mL8: { marginLeft: 8 },
    mL10: { marginLeft: 10 },
    mL12: { marginLeft: 12 },
    mL15: { marginLeft: 15 },
    mL20: { marginLeft: 20 },
    mL25: { marginLeft: 25 },
    mL30: { marginLeft: 30 },
    mL35: { marginLeft: 35 },
    mR0: { marginRight: 0 },
    mR2: { marginRight: 2 },
    mR5: { marginRight: 5 },
    mR10: { marginRight: 10 },
    mR12: { marginRight: 12 },
    mR15: { marginRight: 15 },
    mR20: { marginRight: 20 },
    mR25: { marginRight: 25 },
    mR30: { marginRight: 30 },
    mR35: { marginRight: 35 },
    mT0: { marginTop: 0 },
    mT1: { marginTop: 1 },
    mT2: { marginTop: 2 },
    mT5: { marginTop: 5 },
    mT6: { marginTop: 6 },
    mT8: { marginTop: 8 },
    mT9: { marginTop: 9 },
    mT10: { marginTop: 10 },
    mT12: { marginTop: 12 },
    mT15: { marginTop: 15 },
    mT16: { marginTop: 16 },
    mT17: { marginTop: 17 },
    mT18: { marginTop: 18 },
    mT20: { marginTop: 20 },
    mT22: { marginTop: 22 },
    mT24: { marginTop: 24 },
    mT25: { marginTop: 25 },
    mT26: { marginTop: 26 },
    mT27: { marginTop: 27 },
    mT28: { marginTop: 28 },
    mT30: { marginTop: 30 },
    mT32: { marginTop: 32 },
    mT35: { marginTop: 35 },
    mT37: { marginTop: 37 },
    mT38: { marginTop: 38 },
    mT40: { marginTop: 40 },
    mT45: { marginTop: 45 },
    mT46: { marginTop: 46 },
    mT50: { marginTop: 50 },
    mT52: { marginTop: 52 },
    mT55: { marginTop: 55 },
    mT60: { marginTop: 60 },
    mT70: { marginTop: 70 },
    mT80: { marginTop: 80 },
    mT110: { marginTop: 110 },
    mT125: { marginTop: 125 },
    mT130: { marginTop: 130 },
    mB0: { marginBottom: 0 },
    mB1: { marginBottom: 1 },
    mB2: { marginBottom: 2 },
    mB5: { marginBottom: 5 },
    mB6: { marginBottom: 6 },
    mB10: { marginBottom: 10 },
    mB13: { marginBottom: 13 },
    mB15: { marginBottom: 15 },
    mB20: { marginBottom: 20 },
    mB23: { marginBottom: 23 },
    mB24: { marginBottom: 24 },
    mB25: { marginBottom: 25 },
    mB30: { marginBottom: 30 },
    mB35: { marginBottom: 35 },
    mB37: { marginBottom: 37 },
    mB40: { marginBottom: 40 },
    mB41: { marginBottom: 41 },
    mB45: { marginBottom: 45 },
    mB52: { marginBottom: 52 },
    mB63: { marginBottom: 63 },
    mB70: { marginBottom: 70 },
    mB72: { marginBottom: 72 },
    mB95: { marginBottom: 95 },
    mH0: { marginHorizontal: 0 },
    mH5: { marginHorizontal: 5 },
    mH10: { marginHorizontal: 10 },
    mH15: { marginHorizontal: 15 },
    mH20: { marginHorizontal: 20 },
    mH25: { marginHorizontal: 25 },
    mH30: { marginHorizontal: 30 },
    mV0: { marginVertical: 0 },
    mV5: { marginVertical: 5 },
    mV10: { marginVertical: 10 },
    mV15: { marginVertical: 15 },
    mV20: { marginVertical: 20 },
    mV25: { marginVertical: 25 },
    mV30: { marginVertical: 30 },
  },
};

export default metrics;
