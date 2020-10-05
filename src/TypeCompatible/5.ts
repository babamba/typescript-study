export {};

// age가 선택속성이면 Person은 Product에 할당가능하지 않다.

interface Person {
  name: string;
  age?: number;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: 'mike' };
let person: Person = obj;
let product: Product = obj; // 선택속성이더라도 Person의 값의 집합이 더 큰것. 에러발생
