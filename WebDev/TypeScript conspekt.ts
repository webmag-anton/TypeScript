      /* Типы в TypeScript: */

// - string
// - number
// - boolean
// - null (typeof null === 'null', а не 'object', как в js)
// - undefined
// - void (отсутствующий тип; если ф-я ничего не возвращает)
// - never (если функция бесконечная или возвращает ошибку)
// - tuple (картэж, тип данных для массива из разных типов)
// - any (любой тип; можно переопределять, в отличае от других типов)
// - Array
// - object (для определения объекта или не примитива)
// - funcion (для задания типа funcion используется синтаксис 
//           стрелочной ф-ии let myFunc: (firstArg: string) => void)




      /* Тип для переменной задается после ее имени: */

let isCompleted: boolean = false




      /* 2 способа определения типа Array: */

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]	// Generic type




      /* tuple: */

let y: [string, number] = ["goodbuy", 42]




      /* Функции: */

  // тип возвращаемого значения функции задается после ():

const greetUser = (): void => {
  alert("Hello, nice to see you!")
}
// Ошибка, т.к. в таком синтаксисе мы определяем тип константы, а не 
// возвращаемого ф-ей результата; а т.к. в константу уже присвоена ф-я, 
// то типа void у нее не может быть впринципе
const greetUser2: void = () => {
  alert("Hello, nice to see you!")
}

  // пример с объединяющим типом ( | ) и дефолтным аргументом:

const createPassword = (name: string, age: number | string = 20): string => `${name}${age}`
createPassword('Max') // Max20

  // опциональный аргумент 'age':
const createPassword2 = (name: string, age?: number): object => {
  return {test: `${name}${age}`}
} 




      /* Объекты, type: */

// описываем объект
let user: { name: string, age: number } = {
  name: 'Yauhen',
  age: 30,
  // age: 'test',         // ошибка, значение должно быть number
  // nickName: 'webDev'   // поле nickName не описано
}

// 2 object with the same types
let user2: { name: string, age: number, nickName: string } = {
  name: 'Yauhen',
  age: 30,
  nickName: 'webDev',
}
let admin2: { name: string, age: number, nickName: string } = {
  name: 'Max',
  age: 20,
  nickName: 'Mad',
}

// ^ нарушен принцип DRY (don't repeat yourself)!!!
// поэтому создадим тип Person с помощью ключевого слова type:
type Person = {
  name: string,
  age: number,
  nickName?: string,
  getPass?: () => string,
}
let user3: Person = {
  name: 'Yauhen',
  age: 30,
  nickName: 'webDev'
}
let admin3: Person = {
  name: 'Max',
  age: 20,
  getPass(): string {
    return `${this.name}${this.age}`
  },
}
// type задает псевдоним для любых типов, включая 
// примитивы, в то время как interface - толко для объектов




      /* Классы: */

// для определения доступности к св-вам и методам класса есть 4 модификатора:
// по умолчанию поля без модификаторов - public
class User {
  public name: string;           // доступны для всех наследуемых классов и инстенсов
  private nickName: string;      // поля с private доступны только в классе, котором были определены
  protected age: number;         // поля с protected доступны в классе User и для всех наследуемых классов
  readonly pass: number = 20;    // только для чтения; если задать значение по умолчанию, 
                                 // то в конструкторе можно не задавать значение
  
  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }

  // вместо создания св-ва + присвоения ему значения в конструкторе ^, 
  // можно было сделать это сразу в конструкторе; но в таком случае 
  // нужно обязательно указывать модификатор: protected, public, private
  // constructor(
  //   public name: string,
  //   private nickName: string,
  //   protected age: number,
  //   readonly pass: number  
  // ) {}

  getPass(): string {
    return `${this.nickName}${this.age}`;
  }
}

const yauhen = new User('Yauhen', 30, 'webDev', 123);

yauhen.name;	    // "Yauhen"
yauhen.nickName;  // Prop 'nickName' is private and only accessible within class 'User'
yauhen.age;		    // Prop 'age' is protected and only accessible within class 'User' and its subclasses
yauhen.pass = 42; // Cannot assign to 'pass' because it is a read-only property




      /* Абстрактные классы: */

// Абстрактный класс - это бызовый классы, от которого наследуются другие. 
// У него есть 2 основные особенности: 
// 1. абстрактный класс содержит детали реализации своих элементов (т.е. свойств и методов)
// 2. от абстрактный класс напрямую не создать экземпляр. Он используется только для создания наследников
abstract class User2 {
  constructor(
    public name: string, 
    public age: number
  ) {}
  greet(): void {
    console.log(this.name);
  }
  abstract getPass(): string;  // абстрактные методы обязательно должны быть реализованы в
                               // классе-наследнике, а обычные свойства/методы не обязательно
}
const max = new User2('Max', 20);  // Cannot create an instance of an abstract class

// Create class using Abstraction
class Yauhen extends User2 {
  constructor(name: string, age: number) {
    super(name, age);
  }
  getPass():string {
    return ''
  }
}




      /* Namespaces (пространства имён): */

// Для создания локальных переменных (т.е. в своей области видимости) в 
// TS есть специальная сущьность: namespaces (альтернатива модулям в JS)

// в ES5 использовались анонимные самовызывающиеся ф-ии;
// в ES6 кпоявились модули, которые инкапсулировали заложенную в них логику;
// для инкапсуляции данных в ES6 также можно использовать обычные классы со 
// статическими свойствами; 
// но зачем использовать классы, если есть отдельная сущность этой цели в TS?

// TS предложил свое решение - namespace, который создает свою локальную 
// область видимости. Синтаксис похож на объект.

// чтобы вне namespace было что то доступно, это нужно экспортировать
namespace Utils { 
  export const SECRET: string = '123321';
  const PI: number = 3.14;
  export const getPass = (name: string, age: number): string => `${name}${age}`;
  export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass('Yauhen', 30);

// Для импортирования namespace'a из другого файла существует свой синтаксис:
/// <reference path="path/to/namespace.ts" />     // <---- import

// но такой подход c namespace'ами устарел ^. 
// Для связки TS + React рекомендуется использовать ES6 модули !!!, т.е. просто 
// экспортировать переиспользуемые ф-ии, св-ва, а затем просто их импортировать




      /* interfaces: */

// в TS интерфейсы выполняют функцию именования типов. Интерфейсы похожи на 
// абстрактные классы и на определение типа с помощью ключевого слова type. Но
// ключевое отличае в том что type задает псевдоним для любых типов, включая 
// примитивы, в то время как interface - толко для объектов.
//   interface - сущность, которая служит для создания объектов или имплементации 
// классов (class Clock implements IClock, т.е. по сути расширение интерфейса), 
// от которых в дальнейшем создаются объекты. Мы указываем какие поля, ф-ии и какие 
// вообще элементы должны присутствовать у объектов или классов. 
// В интерфейсах любое свойство/метод не помеченое как опциональное, является 
// обязательным.
//   Интерфейсы наследуются оператором extends:
// interface RectWithArea extends Rect {...}
//   Имплементация класса от интерфейса оператором implements: 
// class Clock implements IClock {...}
// Интерфейсы ни во что не компилируются, нужны только на этапе разработки

interface Rect {     
  readonly id: string
  color?: string     
  size: {
    width: number
    height: number
  }
}
const rect: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  },
  // age: 12   // нельзя добавлять св-ва, которых нет в интерфейсе
}
rect.color = 'black'  // можем добавить поле после создания
// rect2.id = '123'    // выдаст ошибку, т.к. id только для чтения

// создаем объект, который приводим к типу Rect
const rect2 = {} as Rect  // rect3 пустой объект, нет ошибки в том что пока нет полей как у Rect!
// старая запись:
const rect3 = <Rect>{}

// Если необходимо создать интерфейс для объекта, у которого любое 
// количество динамических ключей, то нужно использовать строковый индекс:
interface Styles {
  [propName: string]: string   // может быть любой строковый ключ со строковым значением
}
const css: Styles = {
  border: '1px solid black',
  marginTop: '2px'
}




      /* Generics: */

// Generic - общий тип. Generic позволяет создавать компоненты, способные работать
// с различными типами, а не только с каким то одним, строго определяя его.
// Другими словами мы будем сами задавать определенные типы и контролировать весь
// процесс.

// Эта ф-я принимает любой тип данных и возвращает его; тип any позволяет использовать
// любой тип; однако особенностью TS является контроль над всеми типами данных, в примере
// же эту особенность TS мы пускаем на самотек.
const getter = (data: any): any => data
getter('test').length    // 4
getter(10).length        // undefined (потеряли контроль над типами)


// чтобы такая ситуация не произошла, мы должны точно типизировать аргумент ф-ии;
// работаем с generic типом T (тип указываем в треугольных скобках перед ()), 
// потом присваиваем этот тип аргументу.
const getter2 = <T>(data: T): T => data    
// или
function getter3<T>(data: T): T {
  return data
}
// используя generic тип мы получим ошибку еще на этапе написания кода:
getter2(10).length        // Property 'length' does not exist on type '10'

// мы сами придумываем названия для generic типов! Обычно типы называют одной 
// большой буквой, начиная с буквы T (сокращенно от type) (T, R, ...)

// ==

function mergeObjects(a: object, b: object) {
  return Object.assign({}, a, b)
}
const merged = mergeObjects({name: 'Vladilen'}, {age: 26})
// console.log(merged.name) // ошибка, т.к. TS не знает что поле name должно быть в возвращаемом объекте

function mergeObjects2<T, R>(a: T, b: R): T & R {  // T & R можно и не указывать, т.к. явно возвращается 
  return Object.assign({}, a, b)                   // объект с данными типами и TS это понимает 
}

const merged2 = mergeObjects2({name: 'Vladilen'}, {age: 26})
console.log(merged2.name)
// если вызвать mergeObjects2 и передать не объект, а строку, то получится ерунда, но ошибку не выкинет
const merged3 = mergeObjects2('one', 'two')
console.log(merged3)

// что бы явно указать что тип T является объектом, нужно 
// указать что он наследуется от объекта с помощью extends
function mergeObjects3<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}
// const merged5 = mergeObjects3('one', 'two')      // ошибка, т.к. можно передавать только объекты

// ==

// function withCount(value) {
//   return {
//     value,
//     count: `В этом объекте ${value.length} символов` // ошибка, т.к. не у каждого входящего объекта может 
//   }                                                  // быть ключ length; тут на помощь приходит generic
// }
interface ILength {  // создаем вспомагательный интерфейс
  length: number
}
// наследуемся от интерфейса, у которого есть поле length
function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} символов` 
  }
}
console.log(withCount('Привет typescript')) // {value: "Привет typescript", count: "В этом объекте 17 символов"}


      // Generic class:

// после имени класса указываем Generic тип
class Client<T> {     // работет с 1м любым типом (строка, число...)
  constructor(public name: T, public age: T) {}   // создаем 2 св-ва

  getPass(): string {
    return `${this.name}${this.age}`
  }
}

const yauhen = new Client('Yauhen', '25')
const max = new Client(123, 321)
yauhen.getPass()  // 'Yauhen25'
max.getPass()     // '123321'


// если нужно передать разные типы, например, 
// строку и число, то через запятую указываем generic типы. 
// T и R могут быть как разных типов, так и одного. Если, например,
// R должен был бы быть только числом, то указывали бы так: <T, R extends number>
class Customers<T, R> {
  constructor(public name: T, public age: R) {}   // создаем 2 св-ва

  getPass(): string {
    return `${this.name}${this.age}`
  }
}

const alex = new Customers('Alex', 27)
alex.getPass()  // 'Alex27'


      // Generic promise:

// чтобы указать с каким типом данных работает promise
const promise = new Promise<number>(resolve => {       
// const promise: Promise<number> = new Promise(resolve => {        // данные ^ записи аналогичны
  setTimeout(() => {
    resolve(42)
  }, 10000)
})
promise.then(data => {
  console.log('promise:', data)
}) 
