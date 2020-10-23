export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

interface Japanese extends Person {
  liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "mike", age: 25, liveInSeoul: true };
const p3: Japanese = { name: "mike", age: 27, liveInTokyo: false };

const arr1 = [p1, p2, p3]; // Korean과 Japanese가 Person의 할당관계 이기때문에 Person 으로 묶인다.
const arr2 = [p2, p3]; // 여러개의 타입이 있으면 유니온 타입으로 묶인다.
