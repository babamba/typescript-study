export {};

// named parameters 를 다른곳에서도 사용하고싶다면.
// 인터페이스를 사용한다.

interface Param {
  name: string;
  age?: number;
  language?: string;
}

// named parameters로 작성하는 방법.
// 전체를 객체로 감싸주고 뒤에 타입을 정의
function getText({ name, age = 15, language }: Param): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

// 함수사용법
// age와 language 는 optional 이기 때문에  입력을 하지 않아도됨.
getText({ name: 'aaa', age: 11, language: '' });
