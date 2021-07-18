import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '@themes';

const { size } = Fonts;
const { margins, paddings } = Metrics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightButtonBg,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    ...{ ...paddings.pV15 },
    ...{ ...paddings.pH20 },
    ...{ ...margins.mB20 },
    ...{ ...margins.mB20 },
    ...{ ...margins.mH20 },
    
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    ...{ ...margins.mL25 },
  },
  titleText: {
    fontSize: size.h13,
    fontWeight: '600',
    textAlign: 'left',
  },
  valueText: {
    fontSize: size.h15,
    fontWeight: '500',
    textAlign: 'left',
    ...{ ...margins.mT10 },
    ...{ ...margins.mB15 },
  },
});

export default styles;
