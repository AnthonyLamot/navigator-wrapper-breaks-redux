import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const logoWidth = SCREEN_WIDTH * 0.4;
const logoRatio = 770 / 744; // actual lgoo height divided by width

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    margin: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: logoWidth,
    height: logoWidth * logoRatio,
  },
});

export default styles;
