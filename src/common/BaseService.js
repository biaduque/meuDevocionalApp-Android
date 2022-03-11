import AsyncStorage from '@react-native-async-storage/async-storage';

class BaseService {
  async get(key, isObject = false) {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value != null) {
        if (isObject) {
          return JSON.parse(value);
        } else {
          return value;
        }
      }
    } catch (e) {
      return null;
    }
  }

  async set(key, isObject = false) {
    try {
      const value = await AsyncStorage.setItem(key);

      if (value != null) {
        if (isObject) {
          return JSON.stringify(value);
        } else {
          return value;
        }
      }
    } catch (e) {
      return null;
    }
  }
}

export default BaseService;
