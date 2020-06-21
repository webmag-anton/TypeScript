
function add(a: number, b: number): number {
   return a + b
}

function toUpperCase(str: string): string {
   return str.trim().toLocaleUpperCase()
}


// ======== Перегрузка для функции

interface MyPosition {
   x: number | undefined
   y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
   default: string
}

function position(): MyPosition 
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
   // если не передавали параметры a и b, то нужно вернуть объект от интерфейса MyPosition
   if (!a && !b) {
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



