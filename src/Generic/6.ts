export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  isLiveInSeoul: boolean;
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

const p1: Korean = {
  name: '홍길동',
  age: 23,
  isLiveInSeoul: true
};

const p2: Korean = {
  name: '김삿갓',
  age: 31,
  isLiveInSeoul: false
};

swapProperty(p1, p2, 'age');

console.log(p1);
console.log(p2);
