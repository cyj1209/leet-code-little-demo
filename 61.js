const { createList } = require("./helper.js");

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
var rotateRight = function(head, k) {
  // 双指针
  if (!head) {
    return head;
  }
  let fast = head;
  let slow = head;
  let n = 0;
  while (k > 0) {
    setFast();
  }
  if (fast === null) {
    return head;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  //做成循环链表
  fast.next = head;
  // 剪短连接
  let t = slow.next;
  slow.next = null;
  return t;

  function setFast() {
    if (fast === null) {
      k = k % n;
      fast = head;
      setFast = () => {
        fast = fast.next;
        k--;
      };
    } else {
      fast = fast.next;
      n++;
      k--;
    }
  }
};

let a = [1, 2, 3, 4];
let k = 1;
a = [1];

console.log(rotateRight(createList(a), k));
debugger;
