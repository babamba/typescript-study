"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v1 = 123; // 타입 정보는 컴파일 시점에만 사용됨.
var v2 = function () { return console.log('123'); };
var size = 123;
var isBig = size >= 100;
var msg = isBig ? '크다' : '작다';
var values = [1, 2, 3];
var values2 = [1, 2, 3];
// values.push('a') // 숫자배열이기때문에 에러출력
var data = [msg, size];
data[0].substr(1);
// data[1].substr(1); // 숫자에는 서브스트링 메서드가 없기때문에 에러 출력
console.log('typeof 123 => ', typeof 123);
console.log('typeof abc => ', typeof 'abc');
console.log('typeof [1,2,3] => ', typeof [1, 2, 3]);
// isEqual()
