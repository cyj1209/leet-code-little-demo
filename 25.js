const { createList } = require("./helper");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k <= 1) {
    return head;
  }
  let step = k;
  let res = null;
  let nowNode = null;
  let rest = head;
  let stack = [];
  while (rest !== null) {
    while (step > 0) {
      stack.push(rest);
      step--;
      if (rest.next !== null) {
        rest = rest.next;
      } else {
        break;
      }
    }
    if (stack.length === k) {
      step = k;
      let node = stack.pop();
      rest = node.next;
      while (node) {
        if (res === null) {
          res = node;
          nowNode = node;
        } else {
          nowNode.next = node;
          nowNode = node;
        }
        let t = stack.pop();
        if (!t) {
          node.next = rest;
        }
        node = t;
      }
    } else {
      if (res === null) {
        return head;
      } else {
        return res;
      }
    }
  }
  return res;
};

let a = [1, 2, 3, 4, 5, 6, 7];

console.log(reverseKGroup(createList([]), 2));
debugger;
