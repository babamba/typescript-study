export {};

// 인터페이스로 함수 타입을 정의
// 자바스크립트에서는 함수도 속성값을 가질 수 있다.
interface GetText {
  // 매개변수 : 반환 타입
  (name: string, age: number): string;
  totalCall?: number;
}

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefined) {
    getText.totalCall += 1;
    console.log(`total call : ${getText.totalCall}`);
  }
  return '';
};

getText.totalCall = 0;
getText('', 0);
getText('', 0);
