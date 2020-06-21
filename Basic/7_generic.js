// массив из чисел (в скобках тип элементов массива)
var arrayOfNumbers = [1, 1, 2, 3, 5];
var arrayOfStrings = ['Hello', 'Vladilen'];
// функция работает с generic типом T, который подстраивается под определенный контент,
// который есть в массиве;  принимает массив типа T и возвращает так же массив типа T
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
