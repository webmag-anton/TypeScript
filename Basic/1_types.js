// типы string, boolean, number:
var str = 'Hello'; // переменная str типа string (: string)
var isFetching = true;
var isLoading = false;
var int = 42;
// int = ''                 // нельзя менять тип данных - выдаст ошибку!
var float = 4.2;
var num = 3e10;
// массивы; форма записи generic типа:
var numberArray = [1, 1, 2, 3, 5, 8, 13]; // массив чисел
// у массивов есть и другая форма указания типа; такая форма записи
// называется generic тип (глобальный класс Array состоящий из number'ов):
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
// массив строк
var words = ['Hello', 'TypeScript'];
// типы tuple, any:
// tuple (картэж) - тип данных для массива, 
// состоящего из разных указанных типов данных
var contact = ['Anton', 123423];
// any - специальный тип, если можно переопределять тип
var variable = 42;
// ...
variable = [];
var arrAny = ['Hello', 21];
// функции; типы void, never в функциях:
// указываем тип передаваемого аргумента в ф-ию и тип, который должна
// вернуть ф-ия; void используется, когда функция ничего не возвращает
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// never используется в 2 случаях: 
//  - когда ф-я возвращает ошибку и никогда не заканчивает свое выполнение
function throwError(message) {
    throw new Error(message);
}
//  - либо когда она постоянно что либо делает, т.е. бесконечная
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
