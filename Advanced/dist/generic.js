"use strict";
const cars = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(42);
    }, 10000);
});
promise.then(data => {
    console.log('promise:', data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Vladilen' }, { age: 26 });
function mergeObjects2(a, b) {
    return Object.assign({}, a, b);
}
const merged2 = mergeObjects2({ name: 'Vladilen' }, { age: 26 });
const merged3 = mergeObjects2({ model: 'Ford' }, { year: 2010 });
console.log(merged2.name);
console.log(merged3.year);
const merged4 = mergeObjects2('one', 'two');
console.log(merged4);
function mergeObjects3(a, b) {
    return Object.assign({}, a, b);
}
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Привет typescript'));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Vladilen',
    age: 26
};
console.log(getObjectValue(person, 'name'));
class Collection2 {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection2([1, 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
const objs = new Collection2([{ a: 1 }, { b: 2 }]);
objs.remove({ b: 2 });
console.log(objs.items);
function createAndValidateBike(model, year) {
    const bike = {};
    if (model.length > 3) {
        bike.model = model;
    }
    if (year > 3) {
        bike.year = year;
    }
    return bike;
}
const motos = ['Ford', 'Audi'];
//# sourceMappingURL=generic.js.map