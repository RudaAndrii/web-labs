export const validateAppeal = (object) => {
    const errorMessages = [];

    const username = {val: object.username, min: 3, max: 20};
    const title = {val: object.title, min: 3, max: 20};
    const appealBody = {val: object.appealBody, min: 50, max: 500};

    if (username.val && title.val && appealBody.val) {
        const usernameError = getErrors(username.val, username.min, username.max, 'Username');
        const titleError = getErrors(title.val, title.min, title.max, 'Title');
        const appealBodyError = getErrors(appealBody.val, appealBody.min, appealBody.max, 'Body');

        usernameError ? errorMessages.push(usernameError) : null;
        titleError ? errorMessages.push(titleError) : null;
        appealBodyError ? errorMessages.push(appealBodyError) : null;
    } else {
        errorMessages.push('Fields cannot be empty!');
    }

    if (errorMessages) {
        return errorMessages;
    }

    return object;
};

export const validateNews = (object) => {
    const errorMessages = [];

    const title = {val: object.title, min: 3, max: 20};
    const newsBody = {val: object.newsBody, min: 50, max: 500};

    console.log(title, newsBody);

    if (title.val && newsBody.val) {
        const titleError = getErrors(title.val, title.min, title.max, 'Title');
        const newsBodyError = getErrors(newsBody.val, newsBody.min, newsBody.max, 'Body');

        titleError ? errorMessages.push(titleError) : null;
        newsBodyError ? errorMessages.push(newsBodyError) : null;
    } else {
        errorMessages.push('Fields cannot be empty!');
    }

    if (errorMessages) {
        return errorMessages;
    }

    return object;
};

const getErrors = (field, minLength, maxLength, fieldName) => {
    const fieldLength = field.length;

    if (fieldLength < minLength) {
        return `${fieldName} must be greater longer than ${minLength}`;
    } else if (fieldLength > maxLength) {
        return `${fieldName} must be smaller than ${maxLength}`;
    }

    return null;
};