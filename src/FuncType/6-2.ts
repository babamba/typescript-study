export {};

// 타입스크립트는 맨앞에 this가 사용되면
// 이것을 this의 타입이라고 인식
// 함수의 매개변수는 두번째부터 시작하게 된다.
function getParam(this: string, index: number): string {
  const params = this.split(','); // this의 타입을 정의하지 않았기 때문에 에러발생
  if (index < 0 || params.length <= index) {
    return '';
  }
  return this.split(',')[index];
}
