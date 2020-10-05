export {};

// named parameters 방식이 아닌 코드
// function getText({
//   name,
//   age = 15,
//   language
// }: {
//   name: string;
//   age?: number;
//   language?: string;
// }): string {
//   const nameText = name.substr(0, 10);
//   const ageText = age >= 35 ? 'senior' : 'junior';
//   return `name: ${nameText}, age: ${ageText}, language: ${language}`;
// }

function getText(name: string, age = 15, language?: string): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

// vscode의 리팩토링 기능을 사용해서 변환해준다.
function getText2({
  name,
  age = 15,
  language
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
