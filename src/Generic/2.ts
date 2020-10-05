export {};

// 숫자와 문자열만 필요하다면 함수 오버로드를 사용. 하지만 다른타입이 계속되어 추가된다면?
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(defaultValue: number | string, size: number): Array<number | string> {
  const arr: Array<number | string> = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray(1, 10);
const arr2 = makeArray('empty', 10);
