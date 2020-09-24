import { isEqual } from 'lodash';

const v1: number | string = 123; // 타입 정보는 컴파일 시점에만 사용됨.
const v2 = () => console.log('123');

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];

// values.push('a') // 숫자배열이기때문에 에러출력

const data: [string, number] = [msg, size];
data[0].substr(1);
// data[1].substr(1); // 숫자에는 서브스트링 메서드가 없기때문에 에러 출력

console.log('typeof 123 => ', typeof 123);
console.log('typeof abc => ', typeof 'abc');
console.log('typeof [1,2,3] => ', typeof [1, 2, 3]);

// isEqual()
