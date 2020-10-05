export {};

// 매개변수가 많을때는 비구조화 문법을 이요해서 named parameter로 정의하는게 좋음.

function getText(name: string, age: number, language?: string): string {
  //function getText(name: string, language: string | undefined, age: number): string {
  // 가독성이 좋지않음
  // ? 의 경우 undefined 고려
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  const languageText = language ? language.substr(0, 10) : '';
  return `name: ${nameText}, age: ${ageText}, lang : ${languageText ? languageText : '-'}`;
}

//console.log(getText('mike', undefined, 23));
console.log(getText('mike', 24, 'ko'));
console.log(getText('mike', 22));
//getText('mike', 24, 123); // 타입에러
