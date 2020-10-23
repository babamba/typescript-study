export {};

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

// 인터페이스를 구별하기 위한 한가지 방법은
// 식별가능한 유니온 타입을 이용하는 방법이 있다.
// discriminated union
// 같은 이름의 속성을 정의하고
// 속성의 타입은 모두 겹치지 않게 정의하면 된다

function print(value: Person | Product) {
  console.log(value.name);
  if (value.type === "a") {
    console.log(value); // 타입가드로 인해 자동으로 Person 타입인것을 추론된다
  } else {
    console.log(value.price);
  }
}
