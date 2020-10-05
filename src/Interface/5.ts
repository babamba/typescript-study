export {};

// 인덱스 타입
// 인터페이스에서 속성 이름을 구체적으로 정의하지 않고,
// 값의 타입만을 정의하는 것을 인덱스 타입이라고 부른다.
interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number;
}

const p1: Person = {
  name: 'mike',
  age: '25', // 속성의 타입이 인덱스타입에 해당하지않고, 명시된 타입을 사용하고있기때문에 에러발생
  birthday: '1997-01-01' // 인덱스타입을 정의했기때문에 에러가 나지 않는다.
};
