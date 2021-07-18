import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@themes';

const { size } = Fonts;
const { background, nightFont } = Colors;
const { paddings, margins } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    ...{ ...paddings.pH25 },
    ...{ ...paddings.pV10 },
  },
  titleText: {
    fontSize: size.h15,
    fontWeight: '500',
    color: nightFont,
  },
  firstNameText: {
    fontSize: size.h15,
    fontWeight: '500',
    textAlign: 'left',
    ...{ ...margins.mT10 },
    ...{ ...margins.mB15 },
  },
  lastNameText: {
    fontSize: size.h15,
    fontWeight: '500',
    textAlign: 'left',
    ...{ ...margins.mT10 },
    ...{ ...margins.mB15 },
  },
  emailText: {
    fontSize: size.h15,
    fontWeight: '500',
    textAlign: 'left',
    ...{ ...margins.mT10 },
    ...{ ...margins.mB15 },
  }
});

export default styles;
