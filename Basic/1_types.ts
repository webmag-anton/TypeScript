
const str: string = 'Hello'

const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42
// int = ''    // нельзя менять тип данных - выдаст ошибку
const float: number = 4.2
const num: number = 3e10

// массив чисел
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// такая форма записи называется GENERIC тип
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
// массив строк
const words: string[] = ['Hello', 'TypeScript']


// Tuple (картэж) - массив из разных типов данных
const contact: [string, number] = ['Anton', 123423] 

// Any (специальный тип, если нужно переопределять тип)
let variable: any = 42
// ...
variable = []


// указываем тип передаваемого аргумента в ф-ию и тип, 
// который должна вернуть ф-ия (void - ничего не возвращает)
function sayMyName(name: string): void {
   console.log(name);
}
sayMyName('Хайзенберг')


// Never - данный тип используется в 2 случаях: 
// когда ф-я возвращает ошибку и никогда не заканчивает свое выполнение
function throwError(message: string): never {
   throw new Error(message)
}
// либо когда она постоянно что либо делает - бесконечная
function infinite(): never {
   while(true) {}
}


// Type - специальная конструкция (ключевое слово) для создания собственных типов
// (например мы можем использовать примитивные типы и создавать для них allias)
type Login = string  // создаем alias (при компиляции в js не попадет)
const login: Login = 'admin'
// const login2: Login = 123   // выдаст ошибку
type ID = string | number  // string или number
const id1: ID = 1234
const id2: ID = '1234'

// примитивные типы null и undefined обычно используются в таком контексте
type someType = string | null | undefined