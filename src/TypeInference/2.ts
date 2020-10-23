export {};

// let 으로 선언한 변수는 재할당 가능하기때문에 융통성있게 타입이 결정된다
// const 변수는 값이 변하지 않기때문에 엄격하게 타입이 결정된다
const v1 = 123;
const v2 = "abc";
//let v3: typeof v1 = 234; // 타입이 123 이기때문에 234를 넣으면 에러
// let v3: typeof v1 = 123;
