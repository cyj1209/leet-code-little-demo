function createTree(array) {
  let node;
  let queue = [];
  let isPop = false;
  array.forEach(item => {
    let newNode = null;
    if (item !== null) {
      newNode = {
        val: item,
        left: null,
        right: null
      };
    }
    if (!node) {
      node = newNode;
      queue.unshift(node);
    } else {
      let nowNode = queue[queue.length - 1];
      if (isPop) {
        nowNode.right = newNode;
        queue.pop();
      } else {
        nowNode.left = newNode;
      }
      if (newNode !== null) {
        queue.unshift(newNode);
      }
      isPop = !isPop;
    }
  });
  return node;
}

var isBalanced = function(root) {
  return (
    (function __isBalanced__(root) {
      if (root === null) {
        return 0;
      }
      let leftSonDepth = __isBalanced__(root.left);
      if (leftSonDepth === -1) {
        return -1;
      }
      let rightSonDepth = __isBalanced__(root.right);
      if (rightSonDepth === -1) {
        return -1;
      }
      if (Math.abs(leftSonDepth - rightSonDepth) > 1) {
        return -1;
      }
      return Math.max(leftSonDepth, rightSonDepth) + 1;
    })(root) !== -1
  );
};

let root = [1, 2, 2, 3, 3, null, null, 4, 4];
console.log(isBalanced(createTree(root)));
console.log("really", false);
root = [3, 9, 20, null, null, 15, 7];
console.log(isBalanced(createTree(root)));
console.log("really", true);
root = [1, null, 2, null, 3];
console.log(isBalanced(createTree(root)));
console.log("really", false);
root = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, null, null, 5, 5];
// root = [1,2,2,3,3,null,null]
console.log(isBalanced(createTree(root)));
console.log("really", true);
debugger;
