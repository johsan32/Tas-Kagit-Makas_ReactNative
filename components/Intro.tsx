import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Color from '../constants/Color';
import Font from '../constants/Font';

const Intro = ({setOpenGame}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/intro.png')}
          style={{resizeMode: 'contain', width: 300, height: 400}}
        />
      </View>
      <Text style={styles.title}>Taş Kağıt Makas</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOpenGame(true)}>
          <Image source={require('../assets/icon.png')} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    width: 250,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
  title: {
    color: Color.secondary,
    fontSize: 36,
    fontWeight: '800',
    fontFamily: Font['poppins-bold'],
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default Intro;
