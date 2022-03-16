import {Animated} from 'react-native';
import moment from 'moment';
import cotidianoBase64 from '../assets/story/cotidiano/base64.json';
import estudosBase64 from '../assets/story/estudos/base64.json';
import vidaBase64 from '../assets/story/vida/base64.json';

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

  getImageToShare = storyImage => {
    switch (storyImage) {
      case 'cotidianoStory1':
        return cotidianoBase64.cotidiano1;
      case 'cotidianoStory2':
        return cotidianoBase64.cotidiano2;
      case 'cotidianoStory3':
        return cotidianoBase64.cotidiano3;
      case 'cotidianoStory4':
        return cotidianoBase64.cotidiano4;
      case 'cotidianoStory5':
        return cotidianoBase64.cotidiano5;
      case 'estudosStory1':
        return estudosBase64.estudos1;
      case 'estudosStory2':
        return estudosBase64.estudos2;
      case 'estudosStory3':
        return estudosBase64.estudos3;
      case 'estudosStory4':
        return estudosBase64.estudos4;
      case 'estudosStory5':
        return estudosBase64.estudos5;
      case 'vidaStory1':
        return vidaBase64.vida1;
      case 'vidaStory2':
        return vidaBase64.vida2;
      case 'vidaStory3':
        return vidaBase64.vida3;
      case 'vidaStory4':
        return vidaBase64.vida4;
      case 'vidaStory5':
        return vidaBase64.vida5;
      case 'vidaStory6':
        return vidaBase64.vida6;
      default:
        return null;
    }
  };
}

export default Utils;
