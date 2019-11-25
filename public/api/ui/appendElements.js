export default function(errorBlock, errorMessages) {
    let li = window.document.createElement('li');

    errorMessages.forEach(message => {
        li.appendChild(window.document.createTextNode(message + '\n'));
        errorBlock.appendChild(li);
    })
}