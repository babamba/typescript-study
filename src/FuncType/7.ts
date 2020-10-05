function getParam(this: string, index: number): string {
  const params = this.split(','); // this의 타입을 정의하지 않았기 때문에 에러발생
  if (index < 0 || params.length <= index) {
    return '';
  }
  return this.split(',')[index];
}

// 속성추가를 위해 인터페이스 작성.에러제거
interface String {
  getParam(this: string, index: number): string;
}

// 자바스크립트에 내장된 타입에 기능을 주입하고 싶을 때.
// 프로토타입을 이용해 주입가능.
// 이 타입에 정의되어 있지않기때문에 에러발생.
String.prototype.getParam = getParam;
console.log('asdf, 1234, ok'.getParam(1));
