// interface;  модификатор readonly, ?, as:
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
rect2.color = 'black'; // можем добавить поле после создания
// rect2.id = '123'    // выдаст ошибку, т.к. id только для чтения
// создаем объект, который приводим к типу Rect
var rect3 = {}; // rect3 пустой объект, нет ошибки в том что пока нет полей как у Rect!
// старая запись:
var rect4 = {};
// создаем объект rect5 от интерфейса RectWithArea
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
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
var myClock = new Clock();
var css = {
    border: '1px solid black',
    marginTop: '2px'
};
