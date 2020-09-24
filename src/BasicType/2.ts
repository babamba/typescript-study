export {};

let v1: undefined = undefined;
let v2: null = null;
// v1 = 123; // undefined 만 가능하다고 명시했기때문에 에러

let v3: number | undefined = undefined; // 유니온 타입
v3 = 123;

console.log('typeof undefined => ', typeof undefined); // undefined는 타입으로 존재하기때문에  undefined출력
console.log('typeof null => ', typeof null); // null 은 타입으로 존재하지않기때문에 object
