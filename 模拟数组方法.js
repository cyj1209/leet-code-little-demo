let a = [0, undefined, 2, 3, 4];
delete a[2];
// console.log(a);
// a.map((value, index, t) => {
//   console.log(value);
//   console.log(index);
//   console.log(t);
// });
// console.log(Object.keys(a));
// a.forEach((value, index, t) => {
//   console.log(value);
//   console.log(index), console.log(t);
// });
// console.log(a.map(item => item));

Array.prototype.newMap = function(fn) {
  if (typeof fn !== "function") {
    throw new Error("fn must be function");
  }
  let newArray = [];
  let lastIndex = 0;
  Object.keys(this).forEach(key => {
    key = Number(key);
    while (key - lastIndex > 1) {
      newArray.push(undefined);
      lastIndex++;
    }
    newArray.push(fn(this[key], key, this));
    lastIndex = key;
  });
  return newArray;
};

let b = a.newMap((value, index, t) => {
  console.log(value);
  console.log(index);
  console.log(t);
  return value;
});
console.log(b);

debugger;
