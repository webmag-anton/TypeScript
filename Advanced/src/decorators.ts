// По большому счету декоратор - это один из паттернов проектирования.
// Сами по себе декораторы - обычные функции.
// Декоратор - это обёртка вокруг функции, которая изменяет поведение
//             последней; основная работа по-прежнему выполняется функцией.
// В TS мы пользуемся декораторами как неким синтаксическим сахором.

// чтобы TS понимал синтаксис декораторов, нужно в конфиге раскоментировать 
// эксперементальную фичу: "experimentalDecorators": true

// В основном декораторы работают с классами.
// Есть 4 вида декораторов, которые мы можем добавлять: 
// 1. для класса;           (декоратор должен принять параметр constructor в декораторе, являющийся конструктором класса)
// 2. для свойств класса;   (декоратор должен принять 2 параметра: target (текущий класс) и propName (св-во))
// 3. для методов класса;   (декоратор должен принять 3 параметра: target, propName и descriptor (описание св-в метода))
// 4. для геттеров/сеттеров класса;   (декоратор должен принять те же параметра, что и декоратор метода)



// мы декомпозируем логику и выносим обертку в другое место, т.е. декоратор стоит отдельно!

// для декорирования класса мы должны принять параметр constructor в декораторе, являющийся конструктором класса
function Log(constructor: Function) {   // создали декоратор Log
  console.log('1', constructor)
}
// для декорирования св-ва класса мы должны принять 2 параметра в декораторе: target (текущий класс) и propName (св-во)
function Log2(target: any, propName: string | Symbol) {   // создали декоратор Log2
  console.log('2', target)
  console.log('3', propName)
}
// для декорирования метода принимаем 3 параметра в декораторе: target, propName и descriptor (описание св-в метода)
function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('4', target)
  console.log('5', propName)
  console.log('6', descriptor)
}

@Log // вешаем декоратор Log на класс Component; в этот момент происходит вызов декоратора
class Component {
  @Log2 // вешаем декоратор Log2 на свойство name; в этот момент происходит вызов декоратора
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Log3 // вешаем декоратор Log3 на метод logName; в этот момент происходит вызов декоратора
  logName(): void {
    console.log(`Component name: ${this.name}`)
  }

  @Log3 // вешаем декоратор Log3 на геттер componentName; в этот момент происходит вызов декоратора
  get componentName() {
    return this.name
  }
}



      // Пример реального использования (используется в Angular):

interface ComponentInterface {
  selector: string
  template: string
}

function ComponentDecorator(config: ComponentInterface) {
  return function  // < эта анонимная ф-я будет являться непосредственно самим декоратором, а не ComponentDecorator
    <T extends { new(...args: any[]): object }>  // такой generic тип; наследуемся от объекта с ключевым словом new, возвращающим объект
  (Constructor: T) {
    // описываем наш декоратор: когда создается новый инстэнс класса CardComponent, мы в #card кладем шаблон
    return class extends Constructor {
      constructor(...args: any[]) {  // при создании инстенса вызывается конструктор анонимного класса
        super(...args)  // чтобы был вызван конструктор класса CardComponent, вызываем метод super и передаем параметры

        const el = document.querySelector(config.selector)!  // т.к. el может быть null, то ставим !
        el.innerHTML = config.template
      }
    }
  }
}

// 1й и 2й параметры нам не важны, нам только нужен descriptor для bind'инга контекста
function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {  // возвращаем так же тип PropertyDescriptor
  const originalFunc = descriptor.value // получаем оригинальную ф-ю

  return {
    configurable: true,
    enumerable: false,
    get() {
      return originalFunc.bind(this)
    }
  }
}

// в этот момент происходит вызов возвращаемой внутри декоратора ф-ии; 
// а конструктор анонимного класса внутри нее вызывается при создании инстенса
@ComponentDecorator({
  selector: '#card',
  template: `
    <div class='card'>
      <div class='card-content'>
        <span class='card-title'>Card Component</span>
      </div>
    </div>
  `
})
class CardComponent {
  // TS автоматически сделает такое: this.name = name; но в таком случае 
  // нужно обязательно указывать модификатор: protected, public, private
  constructor(
    public name: string
  ) { } 
  

  @Bind
  logName(): void {
    console.log(`Component name: ${this.name}`)
  }
}

const card = new CardComponent('My Card Component') // при создании инстенса вызывается конструктор анонимного класса



// ==== декоратор bind'инга контекста:

const button = document.querySelector('#btn')!
button.addEventListener('click', card.logName) // при клике выводится только "Component name:", 
                                               // т.к. у метода logName потерян контекст; можно решить 
                                               // проблему методом bind, но мы сделаем декоратор Bind ^

