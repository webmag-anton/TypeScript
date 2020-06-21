
//    interface - тип, который служит для создания объектов или имплементации классов.  
// Мы указываем какие поля, ф-ии и какие вообще элементы должны присутствовать у объектов 
// или класов. Интерфейсы ни во что не компилируются, нужны только на этапе разработки

// интерфейс, для создания объекта типа Rect
interface Rect { // запятые не нужны
   // поле id только для чтения, значение - строка
   readonly id: string
   // ? - необязательный параметр
   color?: string
   size: {
      width: number
      height: number
   }
}

// создаем объект rect1 от интерфейса Rect 
const rect1: Rect = {  // если не будет какого то поля из интерфейса Rect - будет ошибка!
   id: '1234',
   size: {
      width: 20,
      height: 30
   },
   color: '#ccc',
   // name: '12'   // нельзя добавлять св-ва, которых нет в интерфейсе
}

const rect2: Rect = {
   id: '12345',
   size: {
      width: 10,
      height: 5
   }
}
// может добавить поле после создания
rect2.color = 'black'
// rect2.id = '123'  // выдаст ошибку, т.к. id только для чтения


// создаем объект, который приводим к типу Rect
const rect3 = {} as Rect  // rect3 пустой объект, нет ошибки в том что пока нет полей как у Rect!
// старая запись:
const rect4 = <Rect>{}


// ============  Наследование интерфейсов

interface RectWithArea extends Rect {
   // указываем тип полю getArea - функция (указывается как стрелочная), 
   // после => указываем тип данных, который должен быть возвращен функцией
   getArea: () => number
}
// создаем объект rect5 от интерфейса RectWithArea
const rect5: RectWithArea = {
   id: '123',
   size: {
      width: 20,
      height: 20
   },
   // можно так же явно указать, что getArea возвращает number
   getArea(): number{
      return this.size.width * this.size.height
   } 
}


// =============  Имплементация класса от интерфейса

interface IClock {
   // поле time типа Date
   time: Date
   // метод можно указать и таким образом (без стрелочной ф-ии); принимает параметр типа Date
   setTime(date: Date): void
}

// что бы TypeScript понял, что данный класс имплементируется от интерфейса и должен реализовать 
// его методы (если не будет какого то поля - будет ошибка) - пишем ключевое слово implements
class Clock implements IClock {
   time = new Date()
   setTime(date) {
      this.time = date
   }
}
const myClock = new Clock()


// =============

// Если необходимо создать интерфейс для объекта,
// у которого большое количество динамических ключей

interface Styles {
   // [key: string] говорит о том, что может быть 
   // любой строковый ключ со строковым значением
   [key: string]: string
}

const css: Styles = {
   border: '1px solid black',
   marginTop: '2px',
   borderRadius: '5px'
}