export {};

// 객체의 타입 정의
interface Person {
  name: string;
  age: number;
}

const p1: Person = { name: 'mike', age: 24 };
// const p2: Person = { name: 'mike', age: 'ten' }; // age 는 숫자 속성이기때문에 에러발생
