export {};

// 제네릭으로 스택 자료구조 구현
class Stack<D> {
  private items: D[] = [];
  push(item: D) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();
const stringStack = new Stack<string>();
stringStack.push('a');
const v2 = stringStack.pop();

let myStack: Stack<number>;

myStack = numberStack;
myStack = stringStack; // 제네릭에 number로 할당되었기때문에 문자열제네릭을 사용하는 객체는 할당 불가
