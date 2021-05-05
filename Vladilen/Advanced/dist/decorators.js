"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log('1', constructor);
}
function Log2(target, propName) {
    console.log('2', target);
    console.log('3', propName);
}
function Log3(target, propName, descriptor) {
    console.log('4', target);
    console.log('5', propName);
    console.log('6', descriptor);
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
    get componentName() {
        return this.name;
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "logName", null);
__decorate([
    Log3
], Component.prototype, "componentName", null);
Component = __decorate([
    Log
], Component);
function ComponentDecorator(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const originalFunc = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalFunc.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    ComponentDecorator({
        selector: '#card',
        template: `
    <div class='card'>
      <div class='card-content'>
        <span class='card-title'>Card Component</span>
      </div>
    </div>
  `
    })
], CardComponent);
const card = new CardComponent('My Card Component');
const button = document.querySelector('#btn');
button.addEventListener('click', card.logName);
//# sourceMappingURL=decorators.js.map