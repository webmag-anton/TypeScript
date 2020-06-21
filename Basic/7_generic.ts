
// массив из чисел (в скобках тип элементов массива)
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']

// функция работает с generic типом T, который подстраивается под определенный контент,
// который есть в массиве;  принимает массив типа T и возвращает так же массив типа T
function reverse<T>(array: T[]): T[] {
   return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)