export {};

// 지금까지는 제네릭 타입에 아무타입이나 입력 할수 있었다.
// 하지만 리액트와 같은 라이브러리 API 는 입력가능한 값의 범위를 제한한다.
// 예를 들어 리액트의 속성값 전체는 객체 타입만 허용이 된다.
// 이를 위해 타입스크립트의 제네릭은 타입의 종류를 제한할 수 있는 기능을 제곰ㅇ

// extends라는 키워드를 이요하면 제네릭타입으로 입력할 수 있는 타입의 종류를 제한 할 수 있다.

// A extends B -> A가 B에 할당 가능해야 한다. 라고 읽으면 된다.

// T 는 number 또는 string에 할당 가능해야 한다.
function identity<T extends number | string>(p1: T): T {
  return p1;
}

identity(1);
identity('a');
identity([]); // 배열을 입력하면 에러 발생.
identity(true); // boolean 타입 입력하면 에러 발생.
