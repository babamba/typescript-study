export {};

// 매개변수가 많을때는 비구조화 문법을 이요해서 named parameter로 정의하는게 좋음.

function getText(name: string, age: number = 15, language: 'korean'): string {
  return '';
}

//console.log(getText('mike', undefined, 23));
// console.log(getText('mike'));
// console.log(getText('mike', 22));
// console.log(getText('mike', 24, 'english'));
//getText('mike', 24, 123); // 타입에러
