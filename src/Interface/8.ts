export {};

// 인터페이스로 함수 타입을 정의
interface GetText {
  // 매개변수 : 반환 타입
  (name: string, age: number): string;
}

// 위의 코드와 동일
// type GetText = (name:string, age:number) => string;

const getText: GetText = function (name, age) {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
};
