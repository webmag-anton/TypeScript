//    Интерфейс - тип, который служит для создания объектов или имплементации классов.  
// Мы указываем какие поля, ф-ии и какие вообще элементы должны присутствовать у объектов 
// или класов. Интерфейсы ни во что не компилируются, нужны только на этапе разработки
// создаем объект rect1 от интерфейса Rect
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
// может добавить поле после создания
rect2.color = 'black';
// rect2.id = '123' // выдаст ошибку, т.к. id только для чтения
// создаем объект, который приводим к типу Rect
var rect3 = {};
// старая запись:
var rect4 = {};
console.log(rect3);
// создаем объект rect5 от интерфейса RectWithArea
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    // можно так же явно указать, что getArea возвращает number
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
// что бы TypeScript понял, что данный класс имплементируется от интерфейса и должен реализовать 
// его методы (если не будет какого то поля - будет ошибка) - пишем ключевое слово implements
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
