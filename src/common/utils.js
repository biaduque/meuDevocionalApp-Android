import {Animated} from 'react-native';
import moment from 'moment';

class Utils {
  constructor() {
    this.colors = [
      'rgba(139,162,147,.5)',
      'rgba(236,186,125,.3)',
      'rgba(247,217,160,.3)',
      'rgba(252,237,203,.3)',
    ];
  }

  assertArray(array, property) {
    return array.sort((a, b) => {
      const dateEnd = moment(b[property], 'DD/MM/YYYY HH:mm:ss').unix();
      const startEnd = moment(a[property], 'DD/MM/YYYY HH:mm:ss').unix();

      return new Date(dateEnd).getTime() - new Date(startEnd).getTime();
    });
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
    Animated.timing(property, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  transformDataColor(color, theme) {
    if (!color) {
      return {
        background: theme.devotionalColors.verde2,
        titulo: '#fff',
        baseBiblica: '#fff',
        tagsBackground: theme.devotionalColors.amarelo1,
        image: 'amarelo1',
      };
    }

    if (color === 'verde2') {
      return {
        background: theme.devotionalColors.verde2,
        titulo: '#fff',
        baseBiblica: '#fff',
        tagsBackground: theme.devotionalColors.amarelo1,
        image: 'amarelo1',
      };
    }

    if (color === 'amarelo1') {
      return {
        background: theme.devotionalColors.amarelo1,
        titulo: '#fff',
        baseBiblica: '#fff',
        tagsBackground: theme.devotionalColors.amarelo3,
        image: 'amarelo3',
      };
    }

    if (color === 'amarelo2') {
      return {
        background: theme.devotionalColors.amarelo2,
        titulo: theme.devotionalColors.verde2,
        baseBiblica: theme.devotionalColors.verde2,
        tagsBackground: theme.devotionalColors.verde2,
        image: 'verde2',
      };
    }

    if (color === 'amarelo3') {
      return {
        background: theme.devotionalColors.amarelo3,
        titulo: theme.devotionalColors.amarelo1,
        baseBiblica: theme.devotionalColors.amarelo1,
        tagsBackground: theme.devotionalColors.verde2,
        image: 'amarelo2',
      };
    }
  }
}

export default Utils;
