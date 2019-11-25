import validate from '../helpers/page.validate.js';
import clearUl from "../ui/clearUl.js";
import appendElements from "../ui/appendElements.js";

const initPage = () => {
    const form = window.document.getElementById('submitForm');
    form.addEventListener('submit', handleSubmit);

};

const handleSubmit = event => {
    event.preventDefault();
    let errorMessages;

    const appealUsername = window.document.getElementById('appealUsername');
    const appealTitle = window.document.getElementById('appealTitle');
    const appealBody = window.document.getElementById('appealBody');
    const successBlock = window.document.getElementById('successBlock');

    const errorBlock = window.document.getElementById('errorBlock');

    errorMessages = validate(appealUsername, appealTitle, appealBody);

    clearUl(errorBlock);
    errorMessages.length > 0 ? appendElements(errorBlock, errorMessages) : appendElements(successBlock, ['Saved']);
};


initPage();