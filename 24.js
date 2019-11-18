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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null) {
    return null;
  } else if (head.next === null) {
    return head;
  }
  // 双指针法

  let first = head.next;
  let second = head;
  head = first;
  while (first !== null) {
    second.next = first.next;
    first.next = second;
    if (second.next !== null) {
      second = second.next;
      if (second.next !== null) {
        first.next.next = second.next;
      }
      first = second.next;
    } else {
      return head;
    }
  }
  return head;
};

let a = [1, 2, 3, 4];
console.log(swapPairs(createList(a)));
debugger;
