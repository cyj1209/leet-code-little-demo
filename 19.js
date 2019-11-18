/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 双指针
  // 首指针先走n个
  let first = head;
  let second;
  while (n > 0) {
    first = first.next;
    n--;
  }
  second = head;
  if (first == null) {
    return head.next;
  }
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};

function creatList(array) {
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

console.log(removeNthFromEnd(creatList([1, 2, 3, 4, 5]), 2));
debugger;
