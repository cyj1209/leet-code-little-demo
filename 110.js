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

// console.log(createTree([1,2,2,3,3,null,null,4,4]));
// debugger

function top(stack) {
  return stack[stack.length - 1];
}


// 没有理解如何求树的高度问题
var isBalanced = function(root) {
  if (!root) {
    return true;
  }
  let stack = [];
  let leftDepth = rightDepth = 0;
  return countDepth(root);
  function countDepth(node) {
    if (node !== null) {
      stack.push(node);
      console.log(node.val);
      if (node.left !== null) {
        //   stack.push(node);
        console.log("left");
        if (!countDepth(node.left)) {
          return false;
        }
      }else{
        leftDepth > stack.length && (leftDepth = stack.length)
      } 
      if (node.right !== null) {
        //   stack.push(node);
        console.log("right");
        if (!countDepth(node.right)) {
          return false;
        }
      } else {
        rightDepth > stack.length && (rightDepth = stack.length);
      }
      if(leftDepth - rightDepth > 1){
        return false ;
      }
      stack.pop();
    }
    return true;
  }
};

let root = [1, 2, 2, 3, 3, null, null, 4, 4];
// console.log(isBalanced(createTree(root)));
// console.log("really", false);
// root = [3, 9, 20, null, null, 15, 7];
// console.log(isBalanced(createTree(root)));
// console.log("really", true);
// root = [1, null, 2, null, 3];
// console.log(isBalanced(createTree(root)));
// console.log("really", false);
root = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, null, null, 5, 5];
// root = [1,2,2,3,3,null,null]
console.log(isBalanced(createTree(root)));
console.log("really", true);
debugger;
