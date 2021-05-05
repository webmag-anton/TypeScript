
      // классы в TS создаются так же, как и в ES6, но есть определенные нюансы:

class Typescript {  // здесь все то же самое что есть в ES6, просто указываем типы
  version: string

  constructor(version: string) {
    this.version = version
  }

  // вместо создания св-ва + присвоения ему значения в конструкторе ^, 
  // можно было сделать это сразу в конструкторе; но в таком случае 
  // нужно обязательно указывать модификатор: protected, public, private
  // constructor(
  //   public version: string
  // ) {}

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}



      // модификатор readonly; значение по умолчанию:

class Car {
  readonly model: string  // только для чтения
  readonly numberOfWheels: number = 4  // тип number, по умолчанию равно 4

  constructor(theModel: string) {
    this.model = theModel  // можем перезаписать только внутри конструктора, в других методах нельзя!
  }
}



      // модификаторы protected, public, private:

// по умолчанию поля без модификаторов - public

class Animal {
  protected voice: string = ''      // поля с protected доступны в классе Animal и для всех наследуемых классов
  public color: string = 'black'    // доступны для всех наследуемых классов и инстенсов

  constructor() {
    this.go()                       // go доступен только в классе Animal
  }
  
  private go() {                    // поля с private доступны только в классе, котором были определены
    console.log('go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice                        // имеем доступ к voice, т.к. унаследовали класс
    // this.go()                              // ошибка, нет доступа вне класса, в котором было определено
  }
}

const cat = new Cat()
// console.log(cat.voice)  // ошибка, нет доступа так так voice с модификатором protected



      // абстрактные классы с помощью ключевого слова abstract:

// абстрактные классы помогает лучше представить как будут выглядеть его наследники; и по сути
// он нужен только для создания классов-потомков; от абстрактного классов можно наследоваться 
// другому классу, но от него не создать экземпляр; 
// его суть в том, что он ни во что не компилируется, а нужен на этапе разработки; абстрактный
// класс описывает св-ва и методы наследуемого от него класса; так же есть абстрактные методы

// описываем какие то методы (абстрактные), которые должны быть 
// реализованы у классов, которые будут наследоваться от этого класса
abstract class Component {
  constructor (
    public name: string,
    public age: number
  ) {}

  abstract render(): void  // абстрактные методы не могут иметь имплементацию, поэтому не нужны {} после void
  abstract info(): string

  greet(): void {
    console.log('not abstract')
  }
} 
// необходимо реализовать абстрактные методы, которые унаследовали, иначе будет ошибка;
// если метод не абстрактный (greet), то можем и не реализовывать его
class AppComponent extends Component {
  name: string = 'Eughen'  // св-во age можно и не делать, ошибки не будет

  render(): void {
    console.log('Component on Render')
  }

  info(): string {
    return 'this is info'
  }
}