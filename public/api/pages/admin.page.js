import validate from '../helpers/admin.validate.js'
import clearUl from "../ui/clearUl.js";
import {appendSimpleMessage} from "../ui/appendElements.js";
import DBManager from '../managers/DBManager.js';

const dbManager = new DBManager();

const initPage = () => {
    const form = window.document.getElementById('submitForm');
    form.addEventListener('submit', handleSubmit);

};

const handleSubmit = event => {
    event.preventDefault();

    let errorMessages;

    const newsTitle = window.document.getElementById('newsTitle');
    const newsBody = window.document.getElementById('newsBody');

    errorMessages = validate(newsTitle, newsBody);

    clearUl('errorBlock');
    if (errorMessages.length) {
        appendSimpleMessage('errorBlock', errorMessages)
    } else {
        dbManager.save('news', {newsTitle, newsBody});
        appendSimpleMessage('successBlock', ['Saved']);
    }

};


initPage();