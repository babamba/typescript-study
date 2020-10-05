export {};

// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 합친 문자열을 반환
// 두 매개변수가 모두 숫자이면 합친 숫자를 반환
// 두 매개변수가 서로 다른타입으로 입력하면 안됨.

// 함수 오버로드를 통해 같은이름으로 타입을 정의
// 단지 타입정보이기때문에 자바스크립트로 컴파일 되었을때에는 이러한 타입정보는 제거됨.
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}
// 둘다 숫자일때는 반드시 숫자가 반환된다는 보장이 없기때문에 에러발생
// 로직 상으로는 표현이 됬는데 타입으로 정의가 안되서 에러
const v1: number = add(1, 2);
console.log(add(1, '2')); // 에러발생
