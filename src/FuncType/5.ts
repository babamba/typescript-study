export {};

// 매개변수가 많을때는 비구조화 문법을 이요해서 named parameter로 정의하는게 좋음.

function getText(name: string, ...rest: number[]): string {
  // ... = 나머지 매개변수를 표현
  // 뒤에 입력되는 모든것을 rest 매개변수에 담는다. rest parameter 타입은 항상 배열로 정의해야한다.
  return '';
}

//console.log(getText('mike', undefined, 23));
console.log(getText('mike', 1, 2, 3));
//getText('mike', 24, 123); // 타입에러
