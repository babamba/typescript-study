export {};

interface Person {
  // 읽기전용 속성
  readonly name: string;
  age?: number;
}

//const p1: Person = { name: 'mike' };
const p1: Person = { name: 'mike' };

//p1.name = 'jone'; // readonly기 때문에 변경하려하면 에러
