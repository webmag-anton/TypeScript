class Person {
  constructor(private name: string) {}
}

const max = new Person('Maxim')

// если не поствить !, то будет подсвечена ошибка, 
// т.к. возможно нет такой кнопки в html
const btn: Element = document.querySelector('#btn')!
btn.addEventListener('click', () => {
  console.log('btn clicked');
})