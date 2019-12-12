import useLocalStorage from '../constant/DBConfig.js';
import LocalStorageManager from '../managers/LocalStorageManager.js';
import IndexedDBManager from '../managers/IndexedDBManager.js';

const localStorageManager = new LocalStorageManager();
const indexedDBManager = new IndexedDBManager();

export default class DBManager {
    constructor() {
        console.log(useLocalStorage);
    }

    save(item, object) {
        return useLocalStorage ? localStorageManager.save(item, object) : indexedDBManager.save(item, object);
    }

    all (item) {
        return useLocalStorage ? localStorageManager.all(item) : indexedDBManager.all(item);
    }

    _createStorageIfNotExist(item) {
        return useLocalStorage ? localStorageManager._createStorageIfNotExist(item) : indexedDBManager._createStorageIfNotExist(item);
    }

    _getStorageItems(item) {
        return useLocalStorage ? localStorageManager._getStorageItems(item) : indexedDBManager._getStorageItems(item);
    }

    _createUpdateStorage(item, data = '[]') {
       useLocalStorage ? localStorageManager._createUpdateStorage(item, data) : indexedDBManager._createUpdateStorage(item, data);
    }

}