/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if(x === 0){
      return true;
  }
  if (x % 10 === 0) {
    return false;
  }
  return __isPalindrome__(x, 0);
  function __isPalindrome__(x, now) {
    now = now * 10 + (x % 10);
    if (x === now) {
      return true;
    }
    x = Math.floor(x / 10);
    if (x > now) {
      return __isPalindrome__(x, now);
    } else if (x === now) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPalindrome(1221));
