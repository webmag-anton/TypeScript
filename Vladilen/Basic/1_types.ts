      // типы string, boolean, number:

const str: string = 'Hello' // переменная str типа string (: string)

const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42
// int = ''                 // нельзя менять тип данных - выдаст ошибку!
const float: number = 4.2
const num: number = 3e10



      // массивы; форма записи generic типа:

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]  // массив чисел
// у массивов есть и другая форма указания типа; такая форма записи
// называется generic тип (глобальный класс Array состоящий из number'ов):
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
// массив строк
const words: string[] = ['Hello', 'TypeScript']



      // типы tuple, any:

// tuple (картэж) - тип данных для массива, 
// состоящего из разных указанных типов данных
const contact: [string, number] = ['Anton', 123423] 

// any - специальный тип, если можно переопределять тип
let variable: any = 42
// ...
variable = []

const arrAny: any[] = ['Hello', 21]



      // функции; типы void, never в функциях:

// указываем тип передаваемого аргумента в ф-ию и тип, который должна
// вернуть ф-ия; void используется, когда функция ничего не возвращает
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Хайзенберг')

// never используется в 2 случаях: 
//  - когда ф-я возвращает ошибку и не заканчивает свое выполнение
function throwError(message: string): never {
  throw new Error(message)
}
//  - либо когда она постоянно что либо делает, т.е. бесконечная
function infinite(): never {
  while(true) {}
}



      // ключевое слово type; оператор | (или); оператор & (и):

// type - специальная конструкция (ключевое слово) для создания собственных типов;
// type может задавать псевдоним для любых типов, включая примитивы, в то время 
// как interface - толко для объектов.
type Login = string  // создаем alias (при компиляции в js не попадет)
const login: Login = 'admin'
// const login2: Login = 123   // выдаст ошибку
type ID = string | number  // string или number
const id1: ID = 1234
const id2: ID = '1234'
// пример с типом Man для описания объекта
type Man = {
  name: string,
  age: number,
  nickName?: string,
  getPass?: () => string,
}



      // типы null, undefined, Date, object, Function, Symbol:

// примитивные типы null и undefined обычно используются в таком контексте
type someType = string | null | undefined

// бывают так же и такие типы:
type dateType = Date
type objectType = object
type functionType = Function
type symbolType = Symbol