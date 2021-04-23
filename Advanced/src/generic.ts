
// generic позволяет создавать компоненты, способные работать с различными типами

// синтаксис generic (общего) типа:  Object<typeInObject>, 
// где Object - это какой то объект JS (Array, Promise...) 

// обычное указание типа, встречается чаще:
const cars: string[] = ['Ford', 'Audi']
// generic синтаксис для уазания типа:
const cars2: Array<string> = ['Ford', 'Audi']


// пример использования generic, чтобы 
// указать с каким типом данных работает promise
const promise = new Promise<number>(resolve => {       
// const promise: Promise<number> = new Promise(resolve => {        // данные ^ записи аналогичны
  setTimeout(() => {
    resolve(42)
  }, 10000)
})
promise.then(data => {
  console.log('promise:', data)
}) 



// =====

function mergeObjects(a: object, b: object) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Vladilen'}, {age: 26})

// console.log(merged.name) // ошибка, т.к. TS не знает что поле name должно быть в объекте,
                            // который возвращается;
                            // здесь на помощь и приходят generic'и (общие), которые позволяют
                            // явно указать TS, что в итоговом объекте у нас будут присутствовать
                            // ключи name, age (подстраиваются под любые ключи в объектах). 
                            //   Для этого превращаем ф-ю в generic, добавив треугольные скобки, 
                            // в которых указываем с какими типами данная ф-я будет работать.
                            //   Что примечательно, мы сами придумываем названия для этих типов!
                            // Обычно типы называют одной большой буквой, начиная с буквы T 
                            // (сокращенно от type) (T, R, ...)

// мы говорим что ф-я работает с некоторыми волшебными типами T и R, 
// которые являются generic типами для переменных 'a' и 'b' соответственно.
// используя generic типы, мы явно не привязываемся к какому то объекту и 
// при этом делаем нашу ф-ю более универсальной, т.к. generic'и подстраиваются 
// под входящии данные
function mergeObjects2<T, R>(a: T, b: R): T & R {  // T & R можно и не указывать, т.к. явно возвращается 
  return Object.assign({}, a, b)                   // объект с данными типами и TS это понимает 
}

const merged2 = mergeObjects2({name: 'Vladilen'}, {age: 26})
const merged3 = mergeObjects2({model: 'Ford'}, {year: 2010})
console.log(merged2.name)
console.log(merged3.year)
// если вызвать mergeObjects2 и передать не объект, а строку, то получится ерунда, но ошибку не выкинет
const merged4 = mergeObjects2('one', 'two')
console.log(merged4)

// что бы явно указать что тип T является объектом, нужно 
// указать что он наследуется от объекта с помощью extends
function mergeObjects3<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}
// const merged5 = mergeObjects3('one', 'two')      // ошибка, т.к. можно передавать только объекты



// =====

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



      // прием с использованием оператора keyof:

// function getObjectValue(obj: object, key: string) {
//   return obj[key]                                   // ошибка, т.к. у объекта может не быть переданного ключа
// }

// const person = {
//   name: 'Vladilen',
//   age: 26
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'job'))

// исправляем с помощью generic;  keyof получает все ключи у входящего объекта;
// тип T наследует от типа object; тип R зависит от ключей типа T:
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Vladilen',
  age: 26
}
console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'job'))   // ошибка, нет такого ключа в объекте person



      // взаимодествие generic с классами:

// class Collection {      // ошибки
//   private _items: any[]

//   add(item) {
//     this._items.push(item)
//   }

//   remove(item) {
//     this._items = this._items.filter(i => i !== item)
//   }

//   get items() {
//     return this._items
//   }
// }

// исправляем, указывая, что класс у нас generic: <T>
class Collection2<T> {  // можно было бы указать что тип T может быть только каким то примитивом: <T extends number | boolean | string>
  // private _items: T[] = []  // вместо any указываем тип T (массив с типами T); по умолчанию пустой массив
  constructor(private _items: T[] = []) {}  // можно создать _items и в конструкторе; аналог ^

  add(item: T) {       // так же указываю тип T
    this._items.push(item)
  }

  remove(item: T) {    // так же указываю тип T
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {  // указываю, что возвращаю массив с типами T
    return this._items
  }
}

const strings = new Collection2([1, 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)


const objs = new Collection2([{a: 1}, {b: 2}])
objs.remove({b: 2})  // удаления не произойдет, т.к. каждый объект уникален    
console.log(objs.items)



      // утилита Partial<type>:

interface Bike {
  model: string
  year: number
}

function createAndValidateBike(model: string, year: number): Bike {
  // создаем объект bike от интерфейса Bike; по умолчанию пустой объект
  // const bike: Bike = {}     / ошибка, т.к. не хватает полей model и year из типа Bike; используем Partial 
  
  const bike: Partial<Bike> = {}  // как бы говорим что мы временно создаем объект и в нем временно не хватает ключей

  if (model.length > 3) {
    bike.model = model
  }

  if (year > 3) {
    bike.year = year
  }

  return bike as Bike  // приводим к типу Bike, что бы не было ошибки
}



      // утилита Readonly<type> :

const motos: Readonly<Array<string>> = ['Ford', 'Audi']  // Readonly оборачивает generic тип
// motos.shift()  // ошибка, т.к. утилита Readonly не позволяет мутировать массив