import EntityFactory from "../factories/EntityFactory.js";

export default class LocalStorageManager {
    constructor() {
        this.entityFactory = new EntityFactory();
    }

    save(item, object) {
        let itemStorage;
        let existingItems;
        let newObject = this.entityFactory.createObject(item, object);

        itemStorage = this._createStorageIfNotExist(item);

        existingItems = JSON.parse(itemStorage);

        existingItems.push(newObject);
        this._createUpdateStorage(item, JSON.stringify(existingItems));

        return newObject;
    }

    all (item) {
        return JSON.parse(this._createStorageIfNotExist(item));
    }

    _createStorageIfNotExist(item) {
        let existingStorage = this._getStorageItems(item);

        if (!existingStorage) {
            this._createUpdateStorage(item);
            existingStorage = this._createUpdateStorage(item);
        }

        return existingStorage;
    }

    _getStorageItems(item) {
        return window.localStorage.getItem(item);
    }

    _createUpdateStorage(item, data = '[]') {
        window.localStorage.setItem(item, data);
    }

}