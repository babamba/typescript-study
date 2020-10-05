/**
 * 제네릭은 타입정보가 동적으로 결정되는 타입이다.
 * 제네릭을 통해 같은 규칙을 여러 타입에 적용할 수 있기 때문에,
 * 타입코드를 작성할 때 발생할 수 있는 중복코드를 제거 할 수 있다.
 */

export {};

// 비슷한 로직이며, 매개변수 타입과 리턴타입이 다르다.

function makeNumberArray(defaultValue: number, size: number): number[] {
  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

function makeStringArray(defaultValue: string, size: number): string[] {
  const arr: string[] = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeNumberArray(1, 10);
const arr2 = makeStringArray('empty', 10);
