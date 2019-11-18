const { createList } = require("./helper");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  let head = null;
  let firstNode = l1;
  let secondNode = l2;
  let nowNode = null;
  while (firstNode !== null && secondNode !== null) {
    if (firstNode.val > secondNode.val) {
      if (head === null) {
        head = secondNode;
        nowNode = secondNode;
      } else {
        nowNode.next = secondNode;
        nowNode = secondNode;
      }
      secondNode = secondNode.next;
    } else {
      if (head === null) {
        head = firstNode;
        nowNode = firstNode;
      } else {
        nowNode.next = firstNode;
        nowNode = firstNode;
      }

      firstNode = firstNode.next;
    }
  }
  if (firstNode !== null) {
    nowNode.next = firstNode;
  } else if (secondNode !== null) {
    nowNode.next = secondNode;
  }
  return head;
};

// console.log(createList);

let l1 = createList([1, 2, 4]);
let l2 = createList([1, 3, 4]);
// console.log(l1, l2);

console.log(mergeTwoLists(l1, l2));

debugger;
