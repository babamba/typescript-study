export {};

function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}

// const enum 을 이용해서 컴파일 결과에 enum 객체를 남기지 않을 수 있다.
const enum Fruit {
  Apple,
  Banana,
  Orange
}
const enum Languege {
  Korean = 'ko',
  English = 'en',
  Japanese = 'jp'
}
// 하지만 컴파일 결과물에 없기때문에 위의 함수를 사용할 수 없다. 타입에러
//getIsValidEnumValue(Fruit, 1);
