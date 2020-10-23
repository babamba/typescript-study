export {};

interface Person {
  name: string;
  age: number;
}

// T라는 것을 입력을 받아서  이러한 맵드 타입을 적용한다.
// keyof 를 사용했기 때문에 이 객체의 모든 속성 이름이 유니온타입으로 나열이 된다.
// 그래서 T의 모든 속성에 boolean 타입으로 만든다.
// ?를 사용했기때문에 선택속성으로 만든다.

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};

pMap.name = true;
pMap.age = undefined;
