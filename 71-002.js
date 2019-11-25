/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let a = path.split(/\/+/);
  let stack = [];
  for (let i = 1; i < a.length; i++) {
    if (a[i] === "..") {
      stack.pop();
    } else if (a[i] !== "." && a[i]) {
      stack.push(a[i]);
    }
  }
  return "/" + stack.join("/");
};
let path = "/home/";
console.log(simplifyPath(path));
