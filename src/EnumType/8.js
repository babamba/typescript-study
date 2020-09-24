"use strict";
exports.__esModule = true;
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
// enum은 사용하면 컴파일 후에도 남아있기때문에 번들파일의 크기가 불필요하게 커질수 있다.
// enum 객체에 접근하지 않는다면, 굳이 컴파일 후에 객체로 남겨놓을필요가 없다.
// const enum 을 이용해서 컴파일 결과에 enum 객체를 남기지 않을 수 있다.
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Languege;
(function (Languege) {
    Languege["Korean"] = "ko";
    Languege["English"] = "en";
    Languege["Japanese"] = "jp";
})(Languege || (Languege = {}));
console.log('1 in Fruit : ', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit : ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit : ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Languege : ', getIsValidEnumValue(Languege, 'ko'));
console.log('Korean in Languege : ', getIsValidEnumValue(Languege, 'Korean'));
