import validate from '../helpers/page.validate.js';
import clearUl from "../ui/clearUl.js";
import LocalStorageManager from "../managers/LocalStorageManager.js";
import {appendSimpleMessage} from "../ui/appendElements.js";
import {getAppeal} from "../ui/domBlocks.js";

const localStorageManager = new LocalStorageManager();

const initPage = () => {
    let allAppeals = localStorageManager.all('appeals');
    allAppeals.forEach(appeal => appendSimpleMessage('appealsBlock', getAppeal(appeal)));

    const form = window.document.getElementById('submitForm');
    form.addEventListener('submit', handleSubmit);

};

const handleSubmit = event => {
    event.preventDefault();
    let errorMessages;

    const appealTitle = window.document.getElementById('appealTitle');
    const appealUsername = window.document.getElementById('appealUsername');
    const appealBody = window.document.getElementById('appealBody');

    errorMessages = validate(appealUsername, appealTitle, appealBody);

    clearUl('errorBlock');
    if (errorMessages.length) {
        appendSimpleMessage('errorBlock', errorMessages)
    } else {
        let newObject = localStorageManager.save('appeals', {appealTitle, appealUsername, appealBody});
        appendSimpleMessage('successBlock', ['Saved']);
        appendSimpleMessage('appealsBlock', getAppeal(newObject));
    }
};


initPage();