// generic позволяет создавать компоненты, способные 
// работать с различными типами, а не только с одним
// синтаксис generic типа (общего типа):  Object<typeInObject>, 
// где Object - это какой то объект JS (Array, Promise...) 
// проблематика:
// допустим, у нас есть функция, принимающаю любой тип в качестве аргумента
var getter = function (data) { return data; };
getter(10).length; // ошибка, т.к. у числа нет св-ва length
getter('test').length; // 4
// чтобы такая ситуация не произошла, мы должны точно типизировать аргумент ф-ии;
// как раз тут нам и поможет generic тип:
// работаем с generic типом T (тип указываем в треугольных скобках перед ()), 
// потом присваиваем этот тип аргументу и ожидаем, что ф-я вернет тип T
var getter2 = function (data) { return data; };
// или
function getter3(data) {
    return data;
}
// в таком случаем используя generic тип мы получим ошибку еще на этапе написания кода
// мы сами придумываем названия для generic типов! Обычно типы называют одной 
// большой буквой, начиная с буквы T (сокращенно от type) (T, R, ...)
// массив из чисел (в скобках тип элементов массива)
var arrayOfNumbers = [1, 1, 2, 3, 5];
var arrayOfStrings = ['Hello', 'Vladilen'];
// функция работает с generic типом T, который подстраивается под определенный 
// контент, который есть в массиве; принимает массив типа T и возвращает так же 
// массив типа T
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
// Generic class:
// работет с 1м любым типом (строка, число...)
var Client = /** @class */ (function () {
    function Client(name, age) {
        this.name = name;
        this.age = age;
    } // создаем 2 св-ва
    Client.prototype.getPass = function () {
        return "" + this.name + this.age;
    };
    return Client;
}());
var yauhen = new Client('Yauhen', '25');
var max = new Client(123, 321);
yauhen.getPass(); // 'Yauhen25'
max.getPass(); // '123321'
// если нужно передать разные типы, например, 
// строку и число, то через запятую указываем generic типы. 
// T и R могут быть как разных типов, так и одного. Если, например,
// R должен был бы быть только числом, то указывали бы так: <T, R extends number>
var Customers = /** @class */ (function () {
    function Customers(name, age) {
        this.name = name;
        this.age = age;
    } // создаем 2 св-ва
    Customers.prototype.getPass = function () {
        return "" + this.name + this.age;
    };
    return Customers;
}());
var alex = new Customers('Alex', 27);
alex.getPass(); // 'Alex27'
