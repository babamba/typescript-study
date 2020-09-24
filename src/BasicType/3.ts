export {};

let v1: 10 | 20 | 30; // 타입스크립트는 숫자와 문자열의 리터럴도 타입으로 정리 할 수 있다.
v1 = 10;
//v1 = 15; // v1 타입에 정의되지 않았기 때문에 에러

let v2: '경찰관' | '소방관';
//v2 = '의사'; // 문자열 또한 v2 타입에 정의되지 않았기 때문에 에러
