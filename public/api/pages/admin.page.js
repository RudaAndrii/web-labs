import validate from '../helpers/admin.validate.js'
import clearUl from "../ui/clearUl.js";

const initPage = () => {
    const form = window.document.getElementById('submitForm');
    form.addEventListener('submit', handleSubmit);

};

const handleSubmit = event => {
    event.preventDefault();
    let errorMessages;

    const newsTitle = window.document.getElementById('newsTitle');
    const newsBody = window.document.getElementById('newsBody');
    const errorBlock = window.document.getElementById('errorBlock');

    let li = window.document.createElement('li');

    errorMessages = validate(newsTitle, newsBody);

    clearUl(errorBlock);
    
    errorMessages.length > 0 ? errorMessages.forEach((message, index) => {
        li.appendChild(window.document.createTextNode(message + '\n'));
        errorBlock.appendChild(li);
    }) : null;
};


initPage();