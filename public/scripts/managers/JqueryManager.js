import DomHelper from '../helpers/DomHelper.js';
import EntityManager from "./EntityManager.js";
import handleError from '../helpers/handleError.js';

export default class JqueryManager {
    constructor() {
        this.domHelper = new DomHelper();
        this.entityManager = new EntityManager();
    }

    onSubmitHandler(submitType, ...args) {
        return new Promise((resolve, reject) => {
            this.domHelper.getInputValues(args)
                .then(result => this.domHelper.validateInput(submitType, result))
                .then(object => this.entityManager.save(submitType, object))
                .catch(error => handleError(error, '#errorBlock'))
                .then(() => console.log('Errors generated!'));
        })
    }
}
