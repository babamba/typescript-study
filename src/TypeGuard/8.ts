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

function isPerson(x: Person | Product): x is Person {
  return (x as Person).age !== undefined;
}

function print(value: Person | Product) {
  console.log(value.name);
  if (isPerson(value)) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
