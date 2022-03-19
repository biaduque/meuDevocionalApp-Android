import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalRepositoryService {
  constructor() {
    this.DEVOCIONAL_LIST_KEY = '@meudevocional-devocionais';
    this.MURAL_LIST_KEY = '@meudevocional-mural';
    this.IS_NEW_USER_KEY = '@meudevocional-isNewUser';
    this.LEITURAS_LIST_KEY = '@meudevocional-leituras';
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

      return newValue;
    } else {
      await AsyncStorage.setItem(
        key,
        isObject ? JSON.stringify([value]) : [value],
      );

      return value;
    }
  }

  async update(key, value, isObject = false) {
    const currentValue = await this.get(key, isObject);

    const updatedItem = currentValue.map(item => {
      if (item.id === value.id) {
        return value;
      }

      return item;
    });

    console.log(updatedItem);

    await AsyncStorage.setItem(key, JSON.stringify(updatedItem));

    return updatedItem;
  }

  async replaceAll(key, value, isObject = false) {
    await AsyncStorage.setItem(
      key,
      isObject ? JSON.stringify([value]) : [value],
    );

    return value;
  }

  async removeItem(key, value, isObject = false) {
    const oldValue = await this.get(key, isObject);

    if (oldValue != null) {
      const newValue = oldValue.filter(item => item.id !== value.id);

      await AsyncStorage.setItem(
        key,
        isObject ? JSON.stringify(newValue) : newValue,
      );

      return newValue;
    } else {
      return null;
    }
  }
}

export default LocalRepositoryService;
