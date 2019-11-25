export default function (list) {
    while (list.firstChild) list.removeChild(list.firstChild);
}