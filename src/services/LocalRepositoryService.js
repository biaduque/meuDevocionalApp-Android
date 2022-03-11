import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalRepositoryService {
  constructor() {
    this.DEVOCIONAL_LIST_KEY = '@meudevocional-devocionais';
  }

  async get(key, isObject = false) {
    const value = await AsyncStorage.getItem(key);

    if (value != null) {
      if (isObject) {
        return JSON.parse(value);
      } else {
        return value;
      }
    }

    return null;
  }

  async set(key, value, isObject = false) {
    const oldValue = await this.get(key, isObject);

    if (oldValue != null) {
      const newValue = [...oldValue, {...value}];
      await AsyncStorage.setItem(
        key,
        isObject ? JSON.stringify(newValue) : newValue,
      );

      console.log(newValue);
      return newValue;
    } else {
      await AsyncStorage.setItem(
        key,
        isObject ? JSON.stringify([value]) : [value],
      );

      return value;
    }

    // await AsyncStorage.removeItem(key);
  }
}

export default LocalRepositoryService;
