function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase();
}
function position(a, b) {
    // если не передавали параметров a и b, то нужно вернуть MyPosition
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    // если передали только a
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    // а иначе
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('One param', position(42));
console.log('Two params', position(10, 15));
