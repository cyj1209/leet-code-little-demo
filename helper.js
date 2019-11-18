function createList(array) {
  if (array.length === 0) {
    return null;
  }
  let head;
  array.reduce((pre, curr) => {
    let node = {
      val: curr,
      next: null
    };
    if (pre === null) {
      head = node;
    } else {
      pre.next = node;
    }
    return node;
  }, null);
  return head;
}

let a = [1,2,3,4,5];

// let [...rest,last] = a ;
// console.log(rest,last);
//  Rest element must be last element


module.exports = {
  createList
};
