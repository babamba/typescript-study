export {};

const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
//arr1.push("a"); // 타입추론에 의해 에러발생

const obj = { id: "abcd", age: 123, language: "korean" };
const { id, age, language } = obj;

//console.log(id === age); // 타입추론에 의해 에러발생
