var str = 'Hello';
var isFetching = true;
var isLoading = false;
var int = 42;
// int = ''    // нельзя менять тип данных - выдаст ошибку
var float = 4.2;
var num = 3e10;
// массив чисел
var numberArray = [1, 1, 2, 3, 5, 8, 13];
// такая форма записи называется generic типы
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
// массив строк
var words = ['Hello', 'TypeScript'];
// Tuple (картэж) - массив из разных типов данных
var contact = ['Anton', 123423];
// Any (специальный тип, если нужно переопределять тип)
var variable = 42;
// ...
variable = [];
// указываем тип передаваемого аргумента в ф-ию и тип, 
// который должна вернуть ф-ия (void - ничего не возвращает)
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// Never - данный тип используется в 2 случаях: 
// когда ф-я возвращает ошибку и никогда не заканчивает свое выполнение, 
function throwError(message) {
    throw new Error(message);
}
// либо когда она постоянно что либо делает - бесконечная
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
