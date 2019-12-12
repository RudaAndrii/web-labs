import validate from '../helpers/page.validate.js';
import clearUl from "../ui/clearUl.js";
import DBManager from '../managers/DBManager.js';
import {appendSimpleMessage} from "../ui/appendElements.js";
import {getAppeal} from "../ui/domBlocks.js";
import useLocalStorage from '../constant/DBConfig.js';

const dbManager = new DBManager();

const initPage = () => {
    if(useLocalStorage) {
        let allAppeals = dbManager.all('appeals');
        allAppeals.forEach(appeal => appendSimpleMessage('appealsBlock', getAppeal(appeal)));
    
        const form = window.document.getElementById('submitForm');
        form.addEventListener('submit', handleSubmit);
    } else {
        dbManager.all('appeals').then((items) => {
            console.log(items);
            items.forEach(appeal => appendSimpleMessage('appealsBlock', getAppeal(appeal)));
    
            const form = window.document.getElementById('submitForm');
            form.addEventListener('submit', handleSubmit);
        });
    }
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
        let newObject = dbManager.save('appeals', {appealTitle, appealUsername, appealBody});
        appendSimpleMessage('successBlock', ['Saved']);
        appendSimpleMessage('appealsBlock', getAppeal(newObject));
    }
};


initPage();