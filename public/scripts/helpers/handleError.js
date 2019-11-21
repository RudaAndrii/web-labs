import UiManager from "../managers/UiManager.js";

const uiManager = new UiManager();

export default (error, element) => {
    return new Promise((resolve, reject) => {
        uiManager.emptyList(element);

        if (error.errorMessages) {
            resolve(handleInvalidInputError(error, element));
        }
    })
};

const handleInvalidInputError = (error, element) => {
    for (let err of error.errorMessages) {
        uiManager.generateError(element, err);
    }
};