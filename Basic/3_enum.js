//    enum (перечислить) - вспомагательная сущность, которая помагает 
// лучше структурировать код, если присутствуют однотипные элементы
// создаем элементы enum'а
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership); // 1, т.к. первый элемент от начала
// так же можно получить строковое значение элемента enum'а, обратившись по индексу
var membershipReverse = Membership[2];
console.log(membershipReverse); // Premium
// если таким образом создать элементы, то обраившись к ним, получим строку
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social); // INSTAGRAM
