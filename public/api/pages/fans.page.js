import validate from '../helpers/page.validate.js';
import clearUl from "../ui/clearUl.js";
import DBManager from '../managers/DBManager.js';
import {appendSimpleMessage} from "../ui/appendElements.js";
import {getAppeal} from "../ui/domBlocks.js";
const initPage = () => {
    let allAppeals = fetch("http://localhost:3000/appeals", {
        credentials: 'same-origin',
        method: "GET",
    }).then((response) => {
        response.json()
            .then(items => {
                items.forEach(appeal => {
                        console.log(appeal);
                        appendSimpleMessage('appealsBlock', getAppeal(appeal));
                    }
                );
                const form = window.document.getElementById('submitForm');
                form.addEventListener('submit', handleSubmit);
            });
    });
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
        const appeal = {"appeal": {"appealTitle": appealTitle.value,
                "appealUsername": appealUsername.value,
                "appealBody": appealBody.value}};

        fetch("http://localhost:3000/appeals", {
            credentials: 'same-origin',
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(appeal),
        }).then(r => {
            appendSimpleMessage('successBlock', ['Saved']);
        });
        appendSimpleMessage('appealsBlock', getAppeal(appeal));
    }
};


initPage();