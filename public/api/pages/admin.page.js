import validate from '../helpers/admin.validate.js'
import clearUl from "../ui/clearUl.js";
import {appendSimpleMessage} from "../ui/appendElements.js";
import DBManager from '../managers/DBManager.js';
import {getNews} from "../ui/domBlocks.js";

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
        let news = {"news": {"newsTitle": newsTitle.value, "newsBody": newsBody.value}};
        console.log(news);
        fetch("http://localhost:3000/news", {
            credentials: 'same-origin',
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(news),
        }).then(r => appendSimpleMessage('successBlock', ['Saved']));

    }
};

initPage();