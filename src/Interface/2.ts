export {};

interface Person {
  name: string;
  // age?: number; // 물음표 기호를 통해 선택 속성으로 객체에서 없어도 되는 값으로 할당
  age: number | undefined; // 선택 속성과는 다른의미. age를 항상 입력해야하고 값을 undefind로도 할수 있다는 뜻
}

//const p1: Person = { name: 'mike' };
const p2: Person = { name: 'mike', age: undefined };
