import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import choices from '../data/Data';
import Color from '../constants/Color';
import {useEffect, useState} from 'react';
import Modal from './Modal';
import WinModal from './WinModal';
import LoseModal from './LoseModal';

const Home = () => {
  const [choiceItem, setChoiceItem] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [result, setResult] = useState('');
  const [winPlayer, setWinPlayer] = useState([
    {
      user: 0,
      cpu: 0,
    },
  ]);
  const [openInfo, setOpenInfo] = useState(false);
  const [winModalOpen, setWinModalOpen] = useState(false);
  const [loseModalOpen, setLoseModalOpen] = useState(false);

  const handleSwitch = item => {
    setChoiceItem(item);
    randomCpuChoice(item);
  };

  const randomCpuChoice = item => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const cpuRandomChoice = choices[randomNumber];
    setCpuChoice(cpuRandomChoice);
    winnerPlayer(item, cpuRandomChoice);
  };
  const winnerPlayer = (player, randomCpuChoice) => {
    if (player?.name === randomCpuChoice?.name) {
      setResult('Berabere!');
    } else if (
      (player.name === 'Taş' && randomCpuChoice?.name === 'Makas') ||
      (player.name === 'Kağıt' && randomCpuChoice?.name === 'Taş') ||
      (player.name === 'Makas' && randomCpuChoice?.name === 'Kağıt')
    ) {
      setResult('Kazandın!');
      winResult('user');
    } else {
      setResult('Kaybettin!');
      winResult('cpu');
    }
  };

  const winResult = winner => {
    if (winner === 'user' && winPlayer.user !== 3) {
      setWinPlayer(prev => ({...prev, user: prev.user + 1}));
    } else if (winner === 'cpu' && winPlayer.cpu !== 3) {
      setWinPlayer(prev => ({...prev, cpu: prev.cpu + 1}));
    }
  };
  const resetGame = () => {
    setWinPlayer({user: 0, cpu: 0});
    setChoiceItem(null);
    setCpuChoice(null);
    setResult('');
  };

  const handleClick = () => {
    setOpenInfo(true);
  };

  useEffect(() => {
    if (winPlayer.user === 3) {
      setWinModalOpen(true);
      setTimeout(() => {
        return setWinModalOpen(false);
      }, 2000);
    } else if (winPlayer.cpu === 3) {
      setLoseModalOpen(true);
      setTimeout(() => {
        return setLoseModalOpen(false);
      }, 2000);
    } else {
      return;
    }
  }, [winPlayer]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginTop: 10}}>
        <TouchableOpacity onPress={resetGame}>
          <Image
            source={require('../assets/game.png')}
            style={{
              resizeMode: 'contain',
              alignSelf: 'center',
              width: 100,
              height: 80,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}>
          <Text style={styles.textHead}>Taş Kağıt Makas</Text>
          <TouchableOpacity onPress={handleClick}>
            <Image
              source={require('../assets/info.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <Text style={styles.textTitle}>Seçimini Yap</Text>
        <View style={styles.choiceButton}>
          {choices?.map((choice, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.5}
              style={
                choice?.name === choiceItem?.name
                  ? [styles.button, styles.buttonActive]
                  : styles.button
              }
              onPress={() => handleSwitch(choice)}>
              <Image source={choice?.image} style={styles.images} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.textTitle, {marginTop: 25}]}> CPU</Text>
        <Image
          source={cpuChoice ? cpuChoice.image : require('../assets/cpu.png')}
          style={styles.imagesCpu}
        />
      </View>
      <View style={{flex: 0.5, marginTop: 25}}>
        <Text
          style={
            result === 'Kaybettin!'
              ? [styles.textHead, {color: 'red'}]
              : result === 'Kazandın!'
              ? [styles.textHead, {color: 'green'}]
              : [styles.textHead, {color: 'white'}]
          }>
          {result}
        </Text>
      </View>
      <View style={styles.winContainer}>
        <View style={{flexDirection: 'col', width: '50%'}}>
          <Text
            style={[
              styles.textWin,
              winPlayer?.user === 3
                ? styles.win
                : winPlayer?.cpu === 3
                ? styles.lose
                : null,
            ]}>
            USER: {winPlayer?.user}
          </Text>
          <View style={styles.winImg}>
            {Array(winPlayer?.user)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={index}
                  source={require('../assets/win.png')}
                  style={styles.imagesWin}
                />
              ))}
          </View>
        </View>
        <Image source={require('../assets/vs.png')} style={styles.imagesWs} />
        <View style={{flexDirection: 'col', width: '50%'}}>
          <Text
            style={[
              styles.textWin,
              winPlayer?.cpu === 3
                ? styles.win
                : winPlayer?.user === 3
                ? styles.lose
                : null,
            ]}>
            CPU: {winPlayer?.cpu}
          </Text>

          <View style={styles.winImg}>
            {Array(winPlayer?.cpu)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={index}
                  source={require('../assets/win.png')}
                  style={styles.imagesWin}
                />
              ))}
          </View>
        </View>
      </View>
      <View style={{flex: 0.5}}>
        {winPlayer?.user === 3 || winPlayer?.cpu === 3 ? (
          <TouchableOpacity style={styles.resetBtn} onPress={resetGame}>
            <Text style={styles.buttonText}>Yeniden Başla</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {openInfo && <Modal setOpenInfo={setOpenInfo} />}
      {winModalOpen && <WinModal />}
      {loseModalOpen && <LoseModal />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  textHead: {
    fontSize: 34,
    color: Color.secondary,
    fontWeight: '700',
  },
  textTitle: {
    fontSize: 24,
    color: Color.text,
    textAlign: 'center',
  },
  textWin: {
    fontSize: 24,
    color: Color.text,
    textAlign: 'center',
    borderRadius: 10,
    width: 140,
    alignSelf: 'center',
    backgroundColor: Color.secondary,
  },
  win: {
    backgroundColor: 'green',
    color: Color.secondary,
  },
  lose: {
    backgroundColor: 'red',
    color: Color.secondary,
  },
  choiceButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
    flex: 1,
    marginVertical: 1,
  },
  images: {
    width: 90,
    height: 90,
  },
  imagesCpu: {
    width: 90,
    height: 90,
  },
  imagesWin: {
    width: 40,
    height: 50,
  },
  imagesWs: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: '43%',
    top: -10,
  },
  winContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  winImg: {
    flexDirection: 'row',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  resetBtn: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: Color.active,
    borderRadius: 10,
    width: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: Color.secondary,
    fontSize: 20,
  },
  buttonActive: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'none',
  },
  title: {
    backgroundColor: Color.darkText,
  },
});

export default Home;
