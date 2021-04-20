
function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toLocaleUpperCase()
}



      // Перегрузка для функции

// Суть в том, что в зависимости от количества переданных 
// параметров, функция может возвращать то или иное значение

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

// Определяем потенциальные возможности вызова ф-ии position:
// если не передали аргументы, то position возвращает интерфейс MyPosition; 
// если передали 1 аргумент, то position возвращает интерфейс MyPositionWithDefault;
// если передали 2 аргумента, то position возвращает интерфейс MyPosition;
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

// Определяем саму ф-ию position (a и b не обязатеьны, т.к. может быть вызов без аргументов):
function position(a?: number, b?: number) {
  // если не передавали аргументы a и b, то нужно вернуть объект от интерфейса MyPosition
  if (!a && !b) {
    // в данном случае undefined это не тип, а переменная, т.к. внутри объекта
    return {x: undefined, y: undefined}
  }
  // если передали только a
  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }
  // а иначе
  return {x: a, y: b}
}

console.log('Empty', position())                // Empty { x: undefined, y: undefined }
console.log('One param', position(42))          // One param { x: 42, y: undefined, default: '42' }
console.log('Two params', position(10, 15))     // Two params { x: 10, y: 15 }



