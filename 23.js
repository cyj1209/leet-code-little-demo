const { createList } = require("./helper");

var mergeKLists = function(lists) {
  let array = [];
  let res = null;
  lists.forEach(head => {
    if (head) {
      insertion(array, head);
    }
  });
  if (array.length === 0) {
    return null;
  }
  let nowNode;
  while (array.length > 0) {
    let newNode = array.shift();
    if (res === null) {
      res = newNode;
      nowNode = newNode;
    } else {
      nowNode.next = newNode;
      nowNode = newNode;
    }
    if (newNode.next !== null) {
      insertion(array, newNode.next);
    }
  }
  return res;
};

function insertion(array, node) {
  if (array.length === 0) {
    array.push(node);
  } else if (array.length === 1) {
    if (array[0].val > node.val) {
      array.unshift(node);
    } else {
      array.push(node);
    }
  } else {
    let index = getIndex(0, array.length - 1, array, node);
    array.splice(index, 0, node);
  }
}

function getIndex(start, finish, array, node) {
  let middle = Math.ceil((finish - start) / 2) + start;
  if (array[middle - 1].val === node.val) {
    return middle - 1;
  } else if (array[middle].val === node.val) {
    return middle;
  } else if (array[middle - 1].val < node.val) {
    if (array[middle].val > node.val) {
      return middle;
    } else {
      if (middle === finish) {
        return middle + 1;
      }
      return getIndex(middle, finish, array, node);
    }
  } else {
    if (middle - 1 === start) {
      return start;
    }
    return getIndex(start, middle, array, node);
  }
}

function createLists(a) {
  return a.map(item => createList(item));
}

let arrays = [[1, 4, 5], [1, 3, 4], [2, 6]];

let lists = createLists(arrays);

console.log(mergeKLists(lists));

debugger;
