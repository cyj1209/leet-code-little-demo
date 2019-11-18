var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res = [];
  while (l1 || l2 || carry) {
    let addRes = add(l1 ? l1.val : 0, l2 ? l2.val : 0, carry);
    res.push(addRes.res);
    carry = addRes.carry;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  return createList(res);
};

function add(first, second, carry) {
  let res = first + second + carry;
  if (res > 9) {
    res = res % 10;
    carry = 1;
  } else {
    carry = 0;
  }
  return {
    res: res,
    carry: carry
  };
}

function createList(array) {
  let list;
  let nowNode;
  array.forEach(value => {
    let newNode = {
      val: value,
      next: null
    };
    if (!list) {
      list = newNode;
    } else {
      nowNode.next = newNode;
    }
    nowNode = newNode;
  });
  return list;
}

let l1 = createList([1,8]);
let l2 = createList([0]);

console.log(addTwoNumbers(l1, l2));
debugger;
