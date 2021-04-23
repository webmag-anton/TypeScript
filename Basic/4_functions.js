var func = function (a, b) { return a + b; };
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase();
}
// Определяем саму ф-ию position (a и b не обязательны, т.к. может быть вызов без аргументов):
function position(a, b) {
    // если не передавали аргументы a и b, то нужно вернуть объект от интерфейса MyPosition
    if (!a && !b) {
        // в данном случае undefined это не тип, а переменная, т.к. внутри объекта
        return { x: undefined, y: undefined };
    }
    // если передали только a
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    // а иначе
    return { x: a, y: b };
}
console.log('Empty', position()); // Empty { x: undefined, y: undefined }
console.log('One param', position(42)); // One param { x: 42, y: undefined, default: '42' }
console.log('Two params', position(10, 15)); // Two params { x: 10, y: 15 }
