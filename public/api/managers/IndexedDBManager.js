import EntityFactory from "../factories/EntityFactory.js";
import {getAll, save} from '../dao/IndexedDB.js';

export default class IndexedDBManager {
    constructor() {
        this.entityFactory = new EntityFactory();
    }

    save(item, object) {
        let newObject = this.entityFactory.createObject(item, object);
        save(item, newObject);
        return newObject;
    }

    async all (item) {
        const allItems = await getAll(item);
        return allItems;
    }
}