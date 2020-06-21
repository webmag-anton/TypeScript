
interface Person {
   name: string
   age: number
}

// используя данный ^ интерфейс создаем отдельный тип, 
// который будет состоять из ключей данного интерфейса
type PersonKeys = keyof Person  // теперь в типе PersonKeys могут находиться ключи 'name' или 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'job'  // ошибка


type User = {
   _id: number,
   name: string
   email: string
   createdAt: Date
}
// Допустим мы хотим воспользоваться данным ^ типом, при 
// этом создать свой новый тип, но не включающий некоторые поля (_id, createdAt);
// можно это сделать 2 способами:

// 1. Специальное ключевое слово Exclude, далее в треугольных скобках мы описываем что именно нам нужно 
// сделать: с помощью оператора keyof пробегаемся по типу User и дальше через запятую объясняем что нужно исключить
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>  // 'name' | 'email'
// 2. Указываем какие поля нам нужно забрать с помощью ключевого слова Pick
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>  // 'name' | 'email'

// Теперь можно создавать переменные, которые будут принимать определенные значения
let user1: UserKeysNoMeta1 = 'name'
// user1 = '_id'  // ошибка, можно задавать только 'name' или 'email'
