import validateValue from "./validateValue.js";

export default function (...args) {
    const errorMessages = [];
    const [appealUsername, appealTitle, appealBody] = args;

    appealUsername.elemName = 'Username';
    appealTitle.elemName = 'Title';
    appealBody.elemName = 'Body';


    validateValue(appealUsername, errorMessages, 5, 20);
    validateValue(appealTitle, errorMessages, 5, 20);
    validateValue(appealBody, errorMessages, 50, 500);

    return errorMessages;
};

