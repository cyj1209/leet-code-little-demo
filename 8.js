/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 思路
  // 1 看看字符串是以什么开头的
  // 2 字符开头 返回 0
  // 3 ±号开头的 截取
  // 数字开头
  str = str.trim();
  let res = 0;
  let i = 0,
    length = str.length;
  let symbol = "";
  if (/^[\-+]/.test(str[i])) {
    symbol = str[i];
    i++;
  }
  if (!/^[0-7]*/.test(str[i])) {
    return 0;
  }
  for (; i < length; i++) {
    if (str[i] === " ") {
      break;
    }
    let now = Number(str[i]);
    if (isNaN(now)) {
      break;
    }
    res = res * 10 + now;
  }
  if (symbol) {
    res = eval(`0${symbol}${res}`);
  }
  if (res > 2147483647) {
    return 2147483647;
  }
  if (res < -2147483648) {
    return -2147483648;
  }

  return res;
};

let str = "";

console.log(Number(" "));

console.log(myAtoi(str));
