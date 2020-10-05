export {};

// 타입스크립트는 값 자체의 타입보다는 값이 가진 내부 구조에 기반해서 타입 호환성을 검사한다.
// 이를 Stuctural typing 이라고 부른다.

// 지금 Person과 Product는 서로 타입 이름이 다르지만 내부 구조는 같다.
// 속성과 구조가 같기 때문에 Person과 Product는 서로 할당이 가능하다.
interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  age: number;
}

const person: Person = { name: 'mike', age: 23 };
const product: Product = person;

/**
 * 인터페이스의 할당 가능 조건
 * 인터페이스 A가 인터페이스 B로 할당 가능하기 위한 조건.
 * 1. B에 있는 모든 필수 속성의 이름이 A에도 존재해야 한다.
 * 2. 같은 속성 이름에 대해, A의 속성이 B의 속성에 할당 가능해야 한다.
 */
