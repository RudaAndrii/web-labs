const dbName = '21Pilot';

const getAll = (storage) => {
    return new Promise((resolve, reject) => {
        var request = window.indexedDB.open(dbName, 3);
        var result;

        request.onsuccess = (event) => {
            var db = event.target.result;
            var store = db.transaction(storage, "readonly").objectStore(storage);

            store.getAll().onsuccess = (event) => {
                result = event.target.result;
                resolve(result);
            };
        };
    });
};

const save = (storage, object) => {
    return new Promise((resolve, reject) => {
        console.log(object);
        var request = window.indexedDB.open(dbName, 3);
        var result;

        request.onsuccess = (event) => {
            let db = event.target.result;
            let store = db.transaction(storage, "readwrite").objectStore(storage);
            result = store.add(object).onsuccess = (event) => {
                result = event.target.result;
                resolve(result);
            };
        };
    });
};

export {getAll, save};