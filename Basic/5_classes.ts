//    Классы в TS создаются так же, как и в ES6, но есть определенные нюансы

class Typescript {  // здесь все то же самое что есть в ES6, просто указываем типы
   version: string

   constructor(version: string) {
      this.version = version
   }

   info(name: string) {
      return `[${name}]: Typescript version is ${this.version}`
   }
}

class Car {
   readonly model: string  // только для чтения
   readonly numberOfWheels: number = 4  // тип number, по умолчанию равно 4

   constructor(theModel: string) {
      this.model = theModel  // можем перезаписать только внутри конструктора, в других методах нельзя!
   }
}


// ========  Модификаторы (protected, public, private)

class Animal {
   protected voice: string = ''      // поля с protected доступны в классе Animal и для всех наследуемых классов
   public color: string = 'black'    // доступны для всех наследуемых классов и инстенсов
   
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


// ======= Абстрактные классы - от них можно наследоваться, но они ни во что не компилируются, 
//                              нужны на этапе разработки; так же есть абстрактные методы

// описываем какие то методы (абстрактные), которые должны быть 
// реализованы у классов, которые будут наследоваться от этого компонента
abstract class Component {
   abstract render(): void
   abstract info(): string
} 
// необходимо реализовать абстрактные методы, которые унаследовали
class AppComponent extends Component {
   render(): void {
      console.log('Component on Render')
   }

   info(): string {
      return 'this is info'
   }
}