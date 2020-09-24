export {};

// 함수의 반환타입으로 void 와 never
// void 아무값도 반환하지 않고 종료되는 반환타입
// never 예외가 발생해서 비정상적으로 종료되거나 무한루프때문에 종료되지않는 타입 / 쓸일은없음

function f1(): void {
  console.log('hello');
}

function f2(): never {
  throw new Error('some error');
}
function f3(): never {
  while (true) {
    //...
  }
}
