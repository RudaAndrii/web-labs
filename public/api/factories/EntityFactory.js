export default class EntityFactory {
    constructor() {

    }

    createObject(type, object) {
        let entities = {
            'appeals': () => this._createAppealObject(object),
            'news': () => this._createNewsObject(object)
        };

        return entities[type]();
    }

    _createAppealObject({appealTitle, appealUsername, appealBody}) {
        return {
            appealTitle: appealTitle.value,
            appealUsername: appealUsername.value,
            appealBody: appealBody.value
        }
    }

    _createNewsObject({newsTitle, newsBody}) {
        return {
            newsTitle: newsTitle.value,
            newsBody: newsBody.value
        }
    }
}