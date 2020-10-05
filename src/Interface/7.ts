export {};

// 자바스크립트는 타입이름에 숫자와 문자열을 사용할 수 있다.
// 그리고 속성 이름에 숫자를 사용하면,
// 내부적으로 문자열로 변환해서 사용을 한다.
// 따라서 타입스크립트 숫자인 속성이름의 값이
// 문자열이 ㄴ속성 이름의 값으로 할당가능한지 검사를 한다.
interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearmap: YearPriceMap = {};
yearmap[1988] = 1000;
yearmap[1988] = 'abc'; // 숫자 이름으로 된 속성에는 문자를 입력하려고 하면 에러
yearmap['2000'] = 1234;
yearmap['2000'] = 'million'; // 문자으 ㅣ경우 숫자문자 모두 입력가능
