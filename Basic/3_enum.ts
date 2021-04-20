
//    enum (перечислить) - вспомагательная сущность, которая помагает 
// лучше структурировать код, если присутствуют однотипные элементы

// создаем элементы enum'а
enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
console.log(membership) // 1, т.к. первый элемент от начала

// так же можно получить строковое значение элемента enum'а, обратившись по индексу
const membershipReverse = Membership[2]
console.log(membershipReverse) // Premium


// если таким образом создать элементы, то обраившись к ним, получим строку
enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM
console.log(social) // INSTAGRAM
