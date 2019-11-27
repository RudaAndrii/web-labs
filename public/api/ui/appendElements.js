export function appendSimpleMessage(block, messages) {
    let appendMessages = messages;

    appendMessages = !Array.isArray(appendMessages) ? [appendMessages] : appendMessages;
    appendMessages.forEach(message => {
        $(`#${block}`).append(message);
    })
}
