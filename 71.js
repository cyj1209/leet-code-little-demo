/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = [];
  let i = 1;
  let name = "";
  const map = [
    [0, 1, 2],
    [4, 3, 2],
    [5, 2, 2],
    [6, 2, 2]
  ];
  let state = 0;
  while (i < path.length) {
    state = map[state][getInputNumber(path[i])];
    switch (state) {
      case 1:
      case 2:
      case 3:
        name += path[i];
        break;
      case 4:
        name = "";
        state = 0;
        break;
      case 5:
        stack.push(name);
        name = "";
        state = 0;
        break;
      case 6:
        // if (stack.length > 0) {
          stack.pop();
        // }
        name = "";
        state = 0;
        break;
    }
    i++;
  }
  if (name === "..") {
    // if (stack.length > 0) {
      stack.pop();
    // }
  } else if (name !== "" && name !== ".") {
    stack.push(name);
    return "/" + stack.join("/");
  }
  if (stack.length > 0) {
    return "/" + stack.join("/");
  }
  return "/";

  function getInputNumber(char) {
    if (char === "/") {
      return 0;
    } else if (char === ".") {
      return 1;
    } else {
      return 2;
    }
  }
};

let path = "/a/./b/../../c/";
path = "/a//b////c/d//././/..";
console.log(simplifyPath(path));
