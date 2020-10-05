export {};

// age가 선택속성이면 Person은 Product에 할당가능하지 않다.

interface Person {
  name: string;
  age: number;
  gender: string; // 이렇게 추가 속성이 있으면 이 타입의 값의 집합은 더 작아진다.
}

interface Product {
  name: string;
  age: number | string; // product의 타입이 더 크다.
}

const person: Person = { name: 'mike', age: 24, gender: 'male' };

const product: Product = person; // Person이 값이 더 작기 때문에 Product에 할당 가능
