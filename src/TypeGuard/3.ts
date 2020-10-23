export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// interface는 타입을 위한 코드이기때문에
// 컴파일 이후엔 제거되는 코드이다.
// instanceof 라는 것은 값의 영역에 있기때문에 실제 컴파일 후에 돌아가는 코드이므로 에러발생

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    // class의 경우에는 instanceof 라는 키워드사용가능(객체검사)
    console.log(value);
  } else {
    console.log(value.price);
  }
}
