interface Choice {
  name: string;
  image: string | any;
}

const choices: Choice[] = [
  {name: 'Taş', image: require('../assets/tas.png')},
  {name: 'Kağıt', image: require('../assets/kagit.png')},
  {name: 'Makas', image: require('../assets/makas.png')},
];

export default choices;
