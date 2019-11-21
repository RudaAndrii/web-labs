export default class UiManager {
    constructor() {

    }

    generateError(element, error) {
        return $(element).append(getErrorAlert(error));
    }

    generateSuccess(element, success) {
        setTimeout(() => {
            this.emptyList(element);
        }, 5000);

        return $(element).append(getSuccessMessage(success));
    }

    emptyList(element) {
        return $(element).empty();
    }
}

const getErrorAlert = message => {
    return `<div class="alert alert-danger" role="alert">${message}</div>`;
};

const getSuccessMessage = message => {
    return `<div class="alert alert-success" role="alert">${message}</div>`;
};

const getAppeal = (username, title, date) => {
    return `
<div class="col-md-12">
    <h1>${title}</h1>
    <p>${body}</p>
    <div>
        <span class="badge">Posted ${formatDate(date)} by ${username}</span>
    </div>
    <hr />
</div>
`;
};

const getNewsBlock = (title, body, date) => {
    return `
<div class="card">
    <img class="card-img-top" src="/static/images/news-1.png" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${body}</p>
    </div>
    <footer class="blockquote-footer">
        <small>
            Posted on
            <cite title="Source Title">${formatDate(date)}</cite>
        </small>
    </footer>
</div>
`
};