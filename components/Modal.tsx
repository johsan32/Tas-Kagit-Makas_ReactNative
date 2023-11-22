import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Font from '../constants/Font';
import Color from '../constants/Color';

const Modal = ({setOpenInfo}) => {
  return (
    <View style={styles.sectionModal}>
      <StatusBar backgroundColor={'#fff'} />
      <View>
        <Text style={styles.baslik}>Oyun Kuralları</Text>
        <Text style={styles.title}>
          Taş-kâğıt-makas oyunu iki oyuncu ile oynanır. Oyuncu 3 seçenekten
          birini şeçer ve CPU seçimi ile kart karşılaştırılır. Kartların
          seçimine göre aşağıdaki koşullara göre oyun sonuçlanır
        </Text>
        <Text style={styles.head}>Kazanma</Text>
        <View style={{gap: 15}}>
          <Text style={styles.info}>
            <Image source={require('../assets/tas.png')} style={styles.img} />{' '}
            TAŞ, makası kırarak yener.
          </Text>
          <Text style={styles.info}>
            <Image source={require('../assets/kagit.png')} style={styles.img} />{' '}
            KAĞIT, taşı sararak yener.
          </Text>
          <Text style={styles.info}>
            <Image source={require('../assets/makas.png')} style={styles.img} />{' '}
            MAKAS, kağıdı keserek yener.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
            Oyunculardan herhangi birinin kazanma skoru 3 olduğunda bu skora ilk
            ulaşan oyunu kazanır. Berabere kalındığında ise skor değişmez.
          </Text>
        </View>
      </View>
      <View style={{marginTop: 70}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOpenInfo(false)}>
          <Text style={styles.buttonText}>Kapat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionModal: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  baslik: {
    fontSize: 27,
    marginTop: 15,
    textAlign: 'center',
    color: '#000',
    fontFamily: Font['poppins-bold'],
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 24,
    textAlign: 'justify',
    marginTop: 20,
    fontFamily: Font['poppins-regular'],
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    color: 'red',
  },
  info: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: Font['poppins-regular'],
  },
  img: {
    width: 30,
    height: 30,
  },

  button: {
    width: '80%',
    paddingHorizontal: 15,
    marginHorizontal: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    shadowColor: '#1F41BB',
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: Color.background,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    marginVertical: 5,
    shadowOpacity: 0.4,
  },
  buttonText: {
    color: Color.darkText,
    fontFamily: Font['poppins-bold'],
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Modal;
