import validateValue from "./validateValue.js";

export default function (...args) {
    const errorMessages = [];
    const [newsTitle, newsBody] = args;

    newsTitle.elemName = 'Title';
    newsBody.elemName = 'Body';

    validateValue(newsTitle, errorMessages, 5, 20);
    validateValue(newsBody, errorMessages, 50, 500);

    return errorMessages;
};

