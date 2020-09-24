export {};

// 객체의 타입은 object 로

let v: object;
v = { name: 'abc' };
// console.log(v.props1); //객체의 속성에 대한 정보가 없기때문에 특정속성값에 접근하면 타입에러 뜸 interface 사용하여 속성선언
