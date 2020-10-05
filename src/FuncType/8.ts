interface Object {
  getShortkeys(this: object): string[];
}

Object.prototype.getShortkeys = function () {
  return Object.keys(this).filter(key => key.length <= 3);
};

const obj = {
  a: 1,
  bb: 2,
  ccc: 3,
  dddd: 4
};

console.log(obj.getShortkeys());
