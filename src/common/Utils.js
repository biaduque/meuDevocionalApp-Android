import AsyncStorage from '@react-native-async-storage/async-storage';

class Utils {
  constructor() {
    this.colors = [
      'rgba(139,162,147,.5)',
      'rgba(236,186,125,.3)',
      'rgba(247,217,160,.3)',
      'rgba(252,237,203,.3)',
    ];
  }

  randomItemArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  randomProperty(obj) {
    const keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  getRandomColor() {
    return this.randomItemArray(this.colors);
  }
}

export default Utils;
