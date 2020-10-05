export {};

// 속성이 많을수록 타입에 더 많은 제약을 가하는 것.
interface Person {
  name: string;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: 'mike', age: '23', city: 'abc' };
let person: Person = obj;
let product: Product = obj;
product = person;
person = product; // 속성값이 적을 수록 교집합 가능 높다. = 제약이 없다.
