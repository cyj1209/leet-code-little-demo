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
  let lastValue = head.val;
  let stack = [head.val];
  let next = head.next;
  let isShouldPop = false;
  // 1 头部重复了的话我需要换头
  // 2 我需要怎么样回到last
  while (next !== null) {
    if (lastValue === next.val) {
      isShouldPop = true;
    } else {
      // 没有的话就就是直接入栈
      if (isShouldPop) {
        stack.pop();
      }
      stack.push(next.val);
      lastValue = next.val;
      isShouldPop = false;
    }
    next = next.next;
  }
  if (isShouldPop) {
    stack.pop();
  }
  if (stack.length === 0) {
    head = null;
  } else {
    head = {
      val: stack[0],
      next: null
    };
    let now = head;
    for (let i = 1; i < stack.length; i++) {
      now.next = {
        val: stack[i],
        next: null
      };
      now = now.next;
    }
  }

  return head;
};

console.log(deleteDuplicates(createList([1, 1])));

debugger;
