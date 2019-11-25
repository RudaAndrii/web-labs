export default function (elem, errors, min, max) {
    elem.value = elem.value.trim();

    elem.value.length > max
        ? errors.push(`${elem.elemName} is to long`)
        : elem.value.length < min
        ? errors.push(`${elem.elemName} is to short`)
        : null;
};