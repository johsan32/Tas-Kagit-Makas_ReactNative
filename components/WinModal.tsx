import {StyleSheet, View, Image, StatusBar} from 'react-native';
import Color from '../constants/Color';

const WinModal = () => {
  return (
    <View style={styles.sectionModal}>
      <StatusBar backgroundColor={Color.background} />
      <Image source={require('../assets/win.gif')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionModal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 430,
    height: 430,
  },
});

export default WinModal;
