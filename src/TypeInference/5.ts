export {};

function func1(a = "abc", b = 10) {
  //function func1(a: number | string = "abc", b = 10) {
  return `${a} ${b}`;
}

//func1(3, 6); // 타입추론으로 인해 첫번쨰 인자는 string이기때문에 에러

// 타입추론으로 인해 리턴타입이 string이기때문에 에러
//const v1: number = func1("a", 1);

function func2(value: number) {
  // 리턴타입이 여러개라도 자동으로 타입추론
  if (value < 10) {
    return value;
  } else {
    return `${value} is too big`;
  }
}
