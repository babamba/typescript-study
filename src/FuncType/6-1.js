function Counter() {
  //화살표함수
  // new 키워드를 호출하여 생성하게 되면 안에서 사용된 this는
  // 카운터 객체를 가리킨다.
  this.value = 0;
  this.add = amount => {
    this.value += amount;
  };
}

const counter = new Counter(); //인스턴스 생성

console.log('Counter1 : ', counter.value);
counter.add(5);
console.log('Counter1 : ', counter.value);

function Counter2() {
  //일반함수
  // new 키워드를 호출하여 생성하게 되면 안에서 사용된 this는
  // 카운터 객체를 가리킨다.
  this.value = 0;
  //일반 함수의 this는 이 함수를 호출한 주체를 가리킨다.
  // 일반 함수로 정의했을 때 this는 동적.
  this.add = function (amount) {
    this.value += amount;
    console.log(this === global);
  };
}

const counter2 = new Counter2(); //인스턴스 생성

console.log('Counter2 : ', counter2.value);
// counter2가 이 함수를 호출한 주체가 되는것.
// 그랬을 때 이 this 는 이 counter2를 가리킨다.
counter2.add(5);
console.log('Counter2 : ', counter2.value);

const add2 = counter2.add;
// 따로 주체가 보이지 않는다. 이럴땐 전역 객체를 가리킨다.
// 브라우저에서는 window객체 node에서는 global 객체를 가리킨다.
add2(5);

// 10이 찍힐 것같은데 5가 찍힌다.
// 함수가 호출될때 this 가 가리키는 게 counter2 가 아니기 때문.
console.log('Counter2 : ', counter2.value);

function Counter3() {
  //화살표함수
  // new 키워드를 호출하여 생성하게 되면 안에서 사용된 this는
  // 카운터 객체를 가리킨다.
  this.value = 0;
  // 화살표 함수의 this는 이 화살표 함수가 생성될 당시의 this를 가리킨다.
  // 생성될 당시라는것은 이 함수의 this를 뜻한다.
  // 이 화살표 함수가 생성될 당시의 this로 고정되기 때문에 정적이라 표현할 수 있음.
  // 주체가 누구인가 와는 상관이 없다.

  this.add = amount => {
    this.value += amount;
  };
}

const counter3 = new Counter3(); //인스턴스 생성

console.log('Counter3 : ', counter3.value);
counter3.add(5);
console.log('Counter3 : ', counter3.value);
const add3 = counter3.add;
add3(5);
console.log('Counter3 : ', counter3.value);

class Counter4 {
  value = 0;
  // 클래스의 경우에도
  // 일반 함수로 정의했을 때 this는 동적으로 결정
  add(amount) {
    this.value += amount;
  }
  // 화살표 함수로 정의했을 때 this는 정적으로 결정
  // 항상 Counter3 클래스의 객체를 가리키게된다.
  add = amount => {
    this.value += amount;
  };
}

// 함수가 아니라 객체로 감쌌다.
const counter5 = {
  value: 0,
  //일반함수로 add를 정의
  // add: function (amount) {
  //   this.value += amount;
  // } 0 5 5
  // 화살표함수로 정의
  add: amount => {
    // 이 화살표 함수가 생성될 당시 this는
    // 이 화살표 함수를 감싸고 있는 일반 함수가 없기 때문에
    // 항상 전역 객체를 가리키게된다.
    this.value += amount;
  }
  // 0 0 0
};

console.log('Counter5 1 : ', counter5.value);
counter5.add(5);
console.log('Counter5 2 : ', counter5.value);
const add5 = counter5.add;
add5(5);
console.log('Counter5 3 : ', counter5.value);
