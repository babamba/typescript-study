export {};

// union 타입과 intersection 타입
// 여러타입의 교집합과 합집합을 표현가능
let v1: (1 | 3 | 5) & (3 | 5 | 7);

v1 = 3;
// v1 = 1; // 3, 5만 사용가능 하므로 타입에러 발생
