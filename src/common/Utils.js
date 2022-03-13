import {Animated} from 'react-native';

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

  changeDynamicAnimation = (property, toValue, duration = 10) => {
    console.log(property, toValue);
    Animated.timing(property, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };
}

export default Utils;
