import {validateAppeal, validateNews} from "./validateInput.js";

export default class DomHelper {
    constructor() {

    }

    getInputValues(inputElements) {
        return new Promise((resolve, reject) => {
            let elementsObject = "";

            for (let elementId of inputElements) {
                let value = $(elementId).val();

                elementId = elementId.slice(1, elementId.length);
                elementsObject += `"${elementId}": "${value}",`.toString();
            }

            elementsObject = elementsObject.slice(0, elementsObject.length - 1);

            elementsObject = '{' + elementsObject + '}';
            resolve(this.parseJson(elementsObject));
        })
    }

    validateInput(type, object) {
        return new Promise((resolve, reject) => {
            let errorMessages;

            if (type === 'APPEALS') {
                errorMessages = validateAppeal(object);
            } else if (type === 'NEWS') {
                console.log(object);
                errorMessages = validateNews(object);
            }

            if (Array.isArray(errorMessages) && errorMessages.length > 0) {
                const invalidInputError = new Error();
                invalidInputError.errorMessages = errorMessages;

                throw invalidInputError;
            }

            resolve(errorMessages);
        })
    }

    parseJson(string) {
        return JSON.parse(string);
    }
}