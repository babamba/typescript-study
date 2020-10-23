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

interface Product2 {
  type: "c";
  name: string;
  price2: number;
}

// 타입가드는 switch 문으로 작성하기 좋다.
function print(value: Person | Product | Product2) {
  console.log(value.name);
  switch (value.type) {
    case "a":
      console.log(value);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
      break;
  }
}
