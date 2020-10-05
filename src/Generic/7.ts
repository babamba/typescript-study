export {};

interface Product {
  name: string;
  price: number;
}
interface Person {
  name: string;
  age: number;
}

// type T1 = keyof Person;

// keyof 키워드는
// K extends keyof Person
// 오른쪽에 있는 인터페이스(Person)의 모든 속성이름을 나열한 것이다. K = "name" | "age"
function swapProperty<T extends Person, K extends keyof Person>(p1: T, p2: T, key: K): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Product = {
  name: '홍길동',
  price: 1000
};

const p2: Product = {
  name: '김삿갓',
  price: 2000
};

// p1 은 Product 타입이기 때문에 에러 발생
swapProperty(p1, p2, 'name');

console.log(p1);
console.log(p2);
