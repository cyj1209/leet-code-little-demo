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
var deleteDuplicates = function(head) {
  if (!head) {
    return null;
  }
  // 用快慢指针
  let fast = head.next;
  let slow = null;
  let lastValue = head.val;
  let res = null 

  while (fast !== null) {
    if (fast.val !== lastValue) {
      // 相等 慢指针不动，快指针前移
      if (res  === null) {
        slow = fast;
        res = slow ;
      } else {
        slow.next = fast;
        slow = slow.next ;
      }
      lastValue = fast.next && fast.next.val;
    }
    // 不管怎么样每次我至少要前移一位
    fast = fast.next;
  }
  slow.next = null;
  return res;
};

console.log(deleteDuplicates(createList([1, 2, 3, 3, 4, 4, 5])));

debugger;
