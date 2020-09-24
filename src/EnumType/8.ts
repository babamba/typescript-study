export {};

function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}

// enum은 사용하면 컴파일 후에도 남아있기때문에 번들파일의 크기가 불필요하게 커질수 있다.
// enum 객체에 접근하지 않는다면, 굳이 컴파일 후에 객체로 남겨놓을필요가 없다.
// const enum 을 이용해서 컴파일 결과에 enum 객체를 남기지 않을 수 있다.
// 하지만 컴파일 결과물에 없기때문에 위의 함수를 사용할 수 없다.
enum Fruit {
  Apple,
  Banana,
  Orange
}
enum Languege {
  Korean = 'ko',
  English = 'en',
  Japanese = 'jp'
}

console.log('1 in Fruit : ', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit : ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit : ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Languege : ', getIsValidEnumValue(Languege, 'ko'));
console.log('Korean in Languege : ', getIsValidEnumValue(Languege, 'Korean'));
