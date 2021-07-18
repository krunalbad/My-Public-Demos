import { StyleSheet } from 'react-native';
// import DeviceUiInfo from '@utils/deviceUiInfo';
import { Colors, Metrics, Fonts } from '@themes';
const { paddings, margins } = Metrics;
const { size } = Fonts;
const { white, buttonColor } = Colors;
// const { moderateScale } = DeviceUiInfo;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...{ ...paddings.pT50 },
    ...{ ...paddings.pH25 },
  },
  logoIcon: {
    color: white,
    fontSize: size.h40,
  },
  labelStyle: {
    fontSize: size.h12,
    color: white,
    fontWeight: '700',
    // lineHeight: moderateScale(15),
    ...{ ...margins.mL2 },
  },
  inputContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  textInputContainer: {
    width: '100%',
    // height: moderateScale(46),
    height: 46,
    backgroundColor: Colors.inputBg,
    borderRadius: 5,
    ...{ ...paddings.pH15 },
    ...{ ...margins.mT15 },
  },
  textInput: {
    fontSize: size.h14,
    height: '100%',
    color: white,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...{ ...margins.mB10 },
  },
  nextButtonContainer: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: buttonColor,
    ...{ ...margins.mT30 },
  },
  nextButtonText: {
    fontSize: size.h20,
    fontWeight: 'bold',
    lineHeight: 19,
    color: white,
  },
  errorMessageContainer: {
    ...{ ...paddings.pT10 },
  },
  errorText: {
    fontSize: size.h12,
  },
});
