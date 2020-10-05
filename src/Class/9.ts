export {};
// getter 와 setter 사용법
class Person {
  private _name: string = '';

  get name(): string {
    console.log('getter called');
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 10) {
      throw new Error('최대길이 10자리를 넘었습니다.');
    }
    this._name = newName;
  }
}

const person = new Person();
person.name = '김지눤'; // setter가 호출됨.
console.log(person.name); // getter가 호출됨.
person.name = 'asdf asdf asdf';
