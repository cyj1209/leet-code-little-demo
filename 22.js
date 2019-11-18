/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let time = n * 2;
  let res = [new T(["("], 1, "(")];
  while (time > 1) {
    let newRes = [];
    res.forEach(t => {
      let addLeft = t.add("(", n);
      let addRight = t.add(")", n);
      addLeft && newRes.push(addLeft);
      addRight && newRes.push(addRight);
    });
    res = newRes;
    time--;
  }
  return res.map(item => item.res);
};

class T {
  constructor(stack = [], length = 0, res = "") {
    this.stack = stack;
    this.leftLength = length;
    this.res = res;
  }

  get top() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  add(char, n) {
    if (char === "(") {
      if (this.leftLength >= n) {
        return null;
      } else {
        return new T(
          [...this.stack, char],
          this.leftLength + 1,
          this.res + char
        );
      }
    } else {
      //  char = ')'
      let top = this.top;
      if (top === null) {
        return null;
      } else {
        // 需要深拷贝
        return new T(this.pop(), this.leftLength, this.res + char);
      }
    }
  }

  pop() {
    let a = [];
    for (let i = 0; i < this.stack.length - 1; i++) {
      a.push(this.stack[i]);
    }
    return a;
  }
}

console.log(generateParenthesis(3));
debugger;
