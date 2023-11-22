import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Intro from './components/Intro';
import Color from './constants/Color';
import Home from './components/Home';

function App(): JSX.Element {
  const [openGame, setOpenGame] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.background} barStyle={'dark-content'} />
      <View>
        {!openGame && <Intro setOpenGame={setOpenGame} />}
        {openGame && <Home />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default App;
