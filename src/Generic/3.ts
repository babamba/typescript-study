export {};

// 제네릭을 통해 해결
// T라고 한것은 원하는 이름으로 정할 수 있고, T는 타입이 정해 지지 않은상태이고 T는 동적으로 타입이 결정된다.
// 매개변수 쪽과 구현하는 쪽 모두 사용할 수 있습니다.
function makeArray<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];

  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

// <>를 이용해서 타입정보를 입력해 줄수 있다. 명시안해도 자동으로 추론
// const arr1 = makeArray<number>(1, 10);
// const arr2 = makeArray<string>('empty', 10);

const arr3 = makeArray(1, 10);
const arr4 = makeArray('empty', 10);
const arr5 = makeArray(true, 10);
const arr5 = makeArray<number | string>(2, 10);

// 제네릭은 데이터의 타입에 다양성을 부여해주기 때문에 자료구조에서 많이 사용된다.
