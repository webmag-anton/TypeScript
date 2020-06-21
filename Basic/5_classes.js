//    Классы в TS создаются так же, как и в ES6, но есть определенные нюансы
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4; // тип number, по умолчанию равно 4
        this.model = theModel; // можем перезаписать только внутри конструктора, в других методах нельзя
    }
    return Car;
}());
// ========  Модификаторы (protected, public, private)
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // поля с protected доступны в классе Animal и для всех наследуемых классов
        this.color = 'black'; // доступны для всех наследуемых классов и инстенсов
    }
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice; // имеем доступ к voice, т.к. унаследовали класс
        // this.go()                              // ошибка, нет доступа вне класса, в котором было определено
    };
    return Cat;
}(Animal));
var cat = new Cat();
// console.log(cat.voice)  // ошибка, нет доступа так так voice с модификатором protected
// ======= Абстрактные классы - от них можно наследоваться, но они ни во что не компилируются, 
//                              нужны на этапе разработки; так же есть абстрактные методы
// описываем какие то методы (абстрактные), которые должны быть 
// реализованы у классов, которые будут наследоваться от этого компонента
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
// необходимо реализовать абстрактные методы, которые унаследовали
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on Render');
    };
    AppComponent.prototype.info = function () {
        return 'this is info';
    };
    return AppComponent;
}(Component));
